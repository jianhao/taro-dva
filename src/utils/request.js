import Taro from '@tarojs/taro'
// import { getToken } from '@/utils/token'
// import { Mhc } from '@/utils'
import env from '@/env'

// swageer https://mhc-gateway-u.maihaoche.net/doc.html
const baseConfig = {
  baseUrl: env.baseUrl,
}

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}

const checkStatus = response => {
  const errortext = codeMessage[response.statusCode] || response.errMsg

  // Mhc.confirm({
  //   title: `请求错误 ${response.statusCode}${response.url ? `: ${response.url}` : ''}`,
  //   content: errortext,
  // })

  return response
}

// 登录失效处理
function dealWidthTimeOutInner () {
  let taskCount = 0
  return result => {
    if (result.code === '0000996') {
      taskCount += 1
      if (taskCount === 1) {
        Taro.login({
          success: async res => {
            if (res.code) {
              // eslint-disable-next-line no-underscore-dangle
              await Taro.__store__.dispatch({
                type: 'global/loginByCode',
                payload: {
                  code: res.code,
                },
              })
              // eslint-disable-next-line no-underscore-dangle
              await Taro.__store__.dispatch({
                type: 'global/showLoginModal',
              })
              const pagesArray = Taro.getCurrentPages()
              const current = pagesArray[pagesArray.length - 1]
              Taro.redirectTo({
                url: `/${current.route}`,
              })
            } else {
              // Mhc.error(`登录失败！${res.errMsg}`)
            }
          },
        })
        setTimeout(() => {
          taskCount = 0
        }, 3000)
      }
    }
  }
}
const dealWidthTimeOut = dealWidthTimeOutInner()

function request (url, method, { data, headers, baseUrl }) {
  const preUrl = baseUrl ? baseUrl.replace(/\/$/, '') : baseConfig.baseUrl
  const requestUrl = `${preUrl}/${url.replace(/^\//, '')}`

  // Taro.showLoading({
  //   title: 'loading',
  //   mask: true
  // })
  const header = {
    'content-type': 'application/json',
    // token: getToken(),
    ...headers,
  }

  console.log(`==> 请求 ${url}: `, data)

  return Taro.request({
    url: requestUrl,
    method,
    data,
    // 不发送 cookie
    credentials: 'omit',
    header,
  })
    .then(res => {
      console.log(`<== 响应 ${url}: `, res)
      if (res.statusCode >= 200 && res.statusCode < 300) {
        if (!res.data.success) {
          dealWidthTimeOut(res.data)
          // Mhc.error(res.data.message || '请求错误')
        }
        return res.data
      }
      throw res
    })
    .catch(error => checkStatus(error))
}

export const get = (url, data = {}, config = {}) => request(url, 'get', { data, ...config })

export const post = (url, data = {}, config = {}) => request(url, 'post', { data, ...config })

export const put = (url, data = {}, config = {}) => request(url, 'put', { data, ...config })

export const dele = (url, data = {}, config = {}) => request(url, 'delete', { data, ...config })

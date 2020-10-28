import { get, post } from '@/utils/request'

/**
 * 用户登录
 * step: 1 code 2: 手机号 3: 手机号 + 公司 4: 手机号 + 公司 + 姓名+ 授权码 5: 手机 + 公司 + 姓名
 * @param {*} data
 */
export const login = data => post('cus/customer/login', data)

/**
 * 注册阶段，判断走 上述的 3，4，5登录方式
 * @param {*} { customerName }
 */
export const companyRegisterCheck = params => get('cus/customer/cnameCheck', params)

/**
 * 获取当前用户信息
 */
export const getCurrentUser = params => get('cus/customer/getCurrentCustomer', params)

/**
 * 发送短信
 */
export const sendAuthCode = data => post('cus/customer/sendAuthCode', data)

/**
 * 登出
 */
export const logout = params => get('cus/customer/logout', params)

/**
 * 查询公司列表
 */
export const queryCompanyName = params => get('cus/customer/queryCompanyName', params)

/**
 * 微信解密接口
 * @param {*} data encryptedData, iv
 */
export const wxDecode = data => post('cus/wxApplet/decode', data)

/**
 * 获取七牛 token
 */
export const fetchQiNiuToken = params => get('cus/order/getQiNiuToken', params)

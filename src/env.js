// 测试U环境：saascus-u.maihaoche.net
// 预发环境：saascus-pre.maihaoche.net
// 线上：saascus.maihaoche.com

// 优先拿 MHC_BUILD_ENV，这个只会在 test 和 pre 会出现
const env = process.env.MHC_BUILD_ENV || process.env.NODE_ENV

const common = {
  qiniuUrl: 'https://upload.qiniup.com', // 七牛上传
  qiniuPreviewUrl: 'https://img.maihaoche.com', // 七牛文件预览
}

const envConfig = {
  development: {
    baseUrl: 'https://saascus-c.maihaoche.net/bg/applet', // 请求
    contractSignUrl: 'https://solosis-c.maihaoche.net/signature', // 合同 webview
    ...common,
  },
  test: {
    baseUrl: 'https://saascus-c.maihaoche.net/bg/applet', // 请求
    contractSignUrl: 'https://solosis-c.maihaoche.net/signature', // 合同 webview
    ...common,
  },
  pre: {
    baseUrl: 'https://saascus-pre.maihaoche.com/bg/applet', // 请求
    contractSignUrl: 'https://solosis-pre.maihaoche.com/signature', // 合同 webview
    ...common,
  },
  production: {
    baseUrl: 'https://saasbg.maihaoche.com/bg/applet',
    contractSignUrl: 'https://solosis.maihaoche.com/signature',
    ...common,
  },
}

export default envConfig[env]

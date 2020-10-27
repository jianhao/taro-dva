/* eslint-disable global-require */
const path = require('path')

const config = {
  projectName: 'taro-dva',
  date: '2020-10-27',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  babel: {
    sourceMap: true,
    presets: [
      ['env', {
        modules: false,
      }],
    ],
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-object-rest-spread',
      ['transform-runtime', {
        helpers: false,
        polyfill: false,
        regenerator: true,
        moduleName: 'babel-runtime',
      }],
    ],
  },
  plugins: [
    '@tarojs/plugin-less',
    '@tarojs/plugin-terser',
  ],
  // 因为不推荐使用 @ ，跟 @ 开头的包会冲突
  alias: {
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/hooks': path.resolve(__dirname, '..', 'src/hooks'),
    '@/layouts': path.resolve(__dirname, '..', 'src/layouts'),
    '@/pages': path.resolve(__dirname, '..', 'src/pages'),
    '@/styles': path.resolve(__dirname, '..', 'src/styles'),
    '@/services': path.resolve(__dirname, '..', 'src/services'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/env': path.resolve(__dirname, '..', 'src/env'),
  },
  defineConstants: {
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 10240, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
}

module.exports = merge => {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}

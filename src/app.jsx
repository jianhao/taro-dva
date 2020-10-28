import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import dva from './utils/dva'
import models from './models/index'
import Index from './pages/Home/index'

import './app.less'

const dvaApp = dva.createApp({
  initialState: {},
  models,
})
const store = dvaApp.getStore()

// eslint-disable-next-line no-underscore-dangle
Taro.__store__ = store // 挂载到 Taro 上以便全局使用

class App extends Component {
  config = {
    pages: [
      'pages/Home/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
  }

  componentDidMount () {}

  // componentDidShow () {}

  // componentDidHide () {}

  // componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

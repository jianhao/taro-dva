import { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
  }

  componentDidMount () {
    const a = 1
    console.log(a)
  }

  componentWillUnmount () { }

  render () {
    return (
      <View className="index">
        <Text>Hello world1!</Text>
      </View>
    )
  }
}

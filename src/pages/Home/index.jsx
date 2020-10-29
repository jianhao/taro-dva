// import Taro, { useEffect } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { useEffectOnce } from '@/hooks'

import styles from './index.module.less'

function Home ({ home, dispatch }) {
  console.log(home)
  useEffectOnce(() => {
    dispatch({
      type: 'home/setNum',
    })
  })
  return (
    <View className={styles.home}>
      <Text>Hello Taro</Text>
      <AtButton type="primary">按钮文案</AtButton>
    </View>
  )
}

Home.config = {
  navigationBarTitleText: '首页',
}

export default connect(({ home }) => ({
  home,
  // isShowLoginModal: global.isShowLoginModal,
}))(Home)

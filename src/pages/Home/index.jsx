// import Taro, { useEffect } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { useEffectOnce } from '@/hooks'

import styles from './index.less'

function Home ({ home, dispatch }) {
  console.log(home)
  useEffectOnce(() => {
    dispatch({
      type: 'home/setNum',
    })
  })
  return (
    <View className={styles.index}>
      <Text>Hello world1!</Text>
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

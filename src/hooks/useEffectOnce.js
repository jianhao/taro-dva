import { useEffect } from '@tarojs/taro'

const useEffectOnce = effect => {
  useEffect(() => {
    effect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useEffectOnce

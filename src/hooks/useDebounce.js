import { useEffect } from '@tarojs/taro'
import useTimeoutFn from './useTimeoutFn'

export default function useDebounce (fn, ms = 0, deps = []) {
  const [isReady, cancel, reset] = useTimeoutFn(fn, ms)

  useEffect(reset, deps)

  return [isReady, cancel]
}

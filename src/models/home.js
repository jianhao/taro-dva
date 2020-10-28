// import { getSignContract } from '@/services/home'

export default {
  namespace: 'home',
  state: {
    num: 0,
  },
  effects: {
    * setNum (payload, { put }) {
      yield put({
        type: 'saveData',
        payload: { num: 10 },
      })
    },
  },
  reducers: {
    saveData (state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}

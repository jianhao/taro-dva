import { create } from 'dva-core'
// import { createLogger } from 'redux-logger'
import createLoading from 'dva-loading'

let app
let store
let dispatch

function createApp (options) {
  // if (process.env.NODE_ENV === 'development') { // redux 日志
  //   options.onAction = [createLogger()]
  // }
  app = create(options)
  app.use(createLoading({}))

  if (!global.registered) options.models.forEach(model => app.model(model))
  global.registered = true
  app.start()

  // eslint-disable-next-line no-underscore-dangle
  store = app._store
  app.getStore = () => store

  dispatch = store.dispatch
  app.dispatch = dispatch

  return app
}

export default {
  createApp,
  getDispatch () {
    return app.dispatch
  },
}

import { type as batchType } from 'redux-batch-middleware'
import { CALL_HISTORY_METHOD } from 'connected-react-router'

export const routerMiddleware = history => store => next => {
  const mayCallHistory = action => {
    if (action.type === CALL_HISTORY_METHOD) {
      const { payload: { method, args } } = action
      history[method](...args)
    }
  }

  return action => {
    // location actions may be in batchAction.payload
    if (action.type === batchType) {
      for (let subAction of action.payload) {
        mayCallHistory(subAction)
      }
    }

    mayCallHistory(action)

    return next(action)
  }
}

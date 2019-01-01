import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk-fsa'
import counterReducer from '../services/counterDuck'

const createRootReducer = () => {
  return combineReducers({
    counter: counterReducer,
  })
}

/** Initialize the application store */
export const configureStore = () => {
  const rootReducer = createRootReducer()
  const middleware = applyMiddleware(thunkMiddleware)

  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f

  const enhancers = compose(
    middleware,
    devToolsExtension,
  )
  const store = createStore(rootReducer, {}, enhancers)
  return store
}

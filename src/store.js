import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer, { initialState } from './reducers/RootReducer.js'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
)

export default store

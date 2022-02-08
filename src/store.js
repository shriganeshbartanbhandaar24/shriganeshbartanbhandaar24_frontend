import { applyMiddleware, compose, createStore } from "redux";
import rootReducer, { initialState } from "./reducers/RootReducer.js";
import thunk from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;

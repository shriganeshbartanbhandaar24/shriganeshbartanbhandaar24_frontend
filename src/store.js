import { createStore } from "redux";
import rootReducer, { initialState } from "./reducers/RootReducer.js";

const store = createStore(rootReducer, initialState);

export default store;

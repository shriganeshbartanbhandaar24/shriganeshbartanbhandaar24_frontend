import { combineReducers } from "redux";
import { userLogin } from "../action/userAction";
import { userLoginReducers } from "./userReducers";

const initialState = {
  userLogin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
const rootReducers = combineReducers({ userLogin: userLoginReducers });

export { initialState };
export default rootReducers;

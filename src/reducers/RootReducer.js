import { combineReducers } from "redux";
import { userLogin, userSignUp, userLogOut } from "../action/userAction";
import {
  userLoginReducers,
  userSignUpReducer,
  userLogOutReducer,
} from "./userReducers";

const initialState = {
  userLogin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  userSignUp: {
    success: null,
  },
  userLogOut: {
    isLogOut: null,
  },
};
const rootReducers = combineReducers({
  userLogin: userLoginReducers,
  userSignUp: userSignUpReducer,
  userLogOut: userLogOutReducer,
});

export { initialState };
export default rootReducers;

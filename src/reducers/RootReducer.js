import { combineReducers } from "redux";
import { userLogin, userSignUp } from "../action/userAction";
import { userLoginReducers, userSignUpReducer } from "./userReducers";

const initialState = {
  userLogin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  userSignUp: {
    success: null,
  },
};
const rootReducers = combineReducers({
  userLogin: userLoginReducers,
  userSignUp: userSignUpReducer,
});

export { initialState };
export default rootReducers;

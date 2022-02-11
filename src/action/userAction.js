import backendAPI from "../apis/userApi";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../constants/userConstants";

const userLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await backendAPI.post("/users/login", { email, password });

    localStorage.setItem("userInfo", data);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (err) {
    const error = err.response ? err.response.message.data : err.message;
    dispatch({ type: USER_LOGIN_FAIL, payload: error });
  }
};

export { userLogin };

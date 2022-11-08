import backendAPI from "../apis/userApi";
import {
  ADMIN_ADD_PRODUCT_FAIL,
  ADMIN_ADD_PRODUCT_REQUEST,
  ADMIN_ADD_PRODUCT_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
} from "../constants/admin";

const adminLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST });
    const { data } = backendAPI.post("/admin/login", { email, password });
    console.log(data);
    dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data });
  } catch (err) {
    const error = err.message ? err.message : err.response.data.message;
    dispatch({ type: ADMIN_LOGIN_FAIL, payload: error });
  }
};

const addProduct = (productDetails) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_ADD_PRODUCT_REQUEST });
    const { data } = backendAPI.post("/admin/addproduct", { productDetails });
    console.log(data);
    dispatch({ type: ADMIN_ADD_PRODUCT_SUCCESS, payload: data });
  } catch (err) {
    const error = err.message ? err.message : err.response.data.message;
    dispatch({ type: ADMIN_ADD_PRODUCT_FAIL, payload: error });
  }
};

export { addProduct, adminLogin };

import backendAPI from "../apis/userApi"
import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ALL_PRODUCTS_FAIL,
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "../constants/ProductsConstant"
import {
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_LIST_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOG_OUT_FAIL,
  USER_LOG_OUT_REQUEST,
  USER_LOG_OUT_SUCCESS,
  USER_SIGN_UP_FAIL,
  USER_SIGN_UP_REQUEST,
  USER_SIGN_UP_SUCCESS,
} from "../constants/userConstants"

const userLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })
    const { data } = await backendAPI.post(
      "/users/login",
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    )
    console.log(data)

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (err) {
    const error = err.response ? err.response.message.data : err.message
    dispatch({ type: USER_LOGIN_FAIL, payload: error })
  }
}

const userSignUp = (name, mobile, password, email) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGN_UP_REQUEST })
    console.log(name, mobile, password, email)

    const { data } = await backendAPI.post("/users/signup", {
      name,
      mobile,
      password,
      email,
    })
    console.log(data, "Hello 7")

    dispatch(userLogin(email, password))

    dispatch({ type: USER_SIGN_UP_SUCCESS, payload: data })
  } catch (error) {
    const err = error.response ? error.response : error.response.data.message

    dispatch({ type: USER_SIGN_UP_FAIL, payload: err })
  }
}

const userLogOut = () => async (dispatch) => {
  dispatch({ type: USER_LOG_OUT_REQUEST })
  localStorage.removeItem("userInfo")
  dispatch({ type: USER_LOG_OUT_SUCCESS })
  dispatch({ type: USER_LIST_RESET })
}

const addProduct = (formData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_PRODUCT_REQUEST })
    const { data } = await backendAPI.post("/products/addproduct", { formData })
    console.log("add product", data)
    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data })
  } catch (err) {
    const error = err.message ? err.message : err.response.data.message
    dispatch({ type: ADD_PRODUCT_FAIL, payload: error })
  }
}

const showAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_REQUEST })
    const { data } = await backendAPI.get("/products")
    // console.log('data action', data)
    dispatch({ type: ALL_PRODUCTS_SUCCESS, payload: data })
  } catch (err) {
    const error = err.message ? err.message : err.response.data.message
    dispatch({ type: ALL_PRODUCTS_FAIL, payload: error })
  }
}

const getProductDetails = (_id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })
    const { data } = await backendAPI.get(`/products/${_id}`)
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data[0] })
  } catch (err) {
    const error = err.message ? err.message : err.response.data.message
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error })
  }
}

const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LIST_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await backendAPI.get("/users", config)

    console.log("data", data)
    dispatch({ type: USER_LIST_SUCCESS, payload: data })
  } catch (err) {
    const error = err.message ? err.message : err.response.data.message
    dispatch({ type: USER_LIST_FAIL, payload: error })
  }
}

const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DELETE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await backendAPI.delete("/users/${id}", config)

    console.log("data", data)
    dispatch({ type: USER_DELETE_SUCCESS })
  } catch (err) {
    const error = err.message ? err.message : err.response.data.message
    dispatch({ type: USER_DELETE_FAIL, payload: error })
  }
}

export {
  userLogin,
  userSignUp,
  userLogOut,
  addProduct,
  showAllProducts,
  getProductDetails,
  listUsers,
  deleteUser,
}

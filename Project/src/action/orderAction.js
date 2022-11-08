import backendAPI from "../apis/userApi"
import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  DETAILS_ORDER_REQUEST,
  DETAILS_ORDER_SUCCESS,
  DETAILS_ORDER_FAIL,
  PAY_ORDER_REQUEST,
  PAY_ORDER_SUCCESS,
  PAY_ORDER_FAIL,
  MY_ORDER_LIST_REQUEST,
  MY_ORDER_LIST_SUCCESS,
  MY_ORDER_LIST_FAIL,
} from "../constants/OrderConstants"

const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const { data } = await backendAPI.post(`/order`, order, {
      headers: {
        "Content-type": "application/json",
        Authorization: `${userInfo.token}`,
      },
    })
    console.log("data", data)

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data })
  } catch (error) {
    const err = error.message ? error.response.data.message : error.message
    dispatch({ type: CREATE_ORDER_FAIL, payload: err })
  }
}

const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DETAILS_ORDER_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const { data } = await backendAPI.get(`/order/${id}`, {
      headers: {
        Authorization: `${userInfo.token}`,
      },
    })

    dispatch({ type: DETAILS_ORDER_SUCCESS, payload: data })
  } catch (error) {
    const err = error.message ? error.response.data.message : error.message
    dispatch({ type: DETAILS_ORDER_FAIL, payload: err })
  }
}

const payOrder = (id, paymentResult) => async (dispatch, getState) => {
  try {
    dispatch({ type: PAY_ORDER_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const { data } = await backendAPI.put(`/order/${id}/pay`, paymentResult, {
      headers: {
        "Content-type": "application/json",
        Authorization: `${userInfo.token}`,
      },
    })

    dispatch({ type: PAY_ORDER_SUCCESS, payload: data })
  } catch (error) {
    const err = error.message ? error.response.data.message : error.message
    dispatch({ type: PAY_ORDER_FAIL, payload: err })
  }
}

const listMyOrder = () => async (dispatch, getState) => {
  try {
    dispatch({ type: MY_ORDER_LIST_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const { data } = await backendAPI.get(`/order/myorders`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    })
    console.log("Token", userInfo.token)
    console.log("Order List Dara", data)
    dispatch({ type: MY_ORDER_LIST_SUCCESS, payload: data })
  } catch (error) {
    const err = error.message ? error.response.data.message : error.message
    dispatch({ type: MY_ORDER_LIST_FAIL, payload: err })
  }
}

export { createOrder, getOrderDetails, payOrder, listMyOrder }

import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  DETAILS_ORDER_REQUEST,
  DETAILS_ORDER_SUCCESS,
  DETAILS_ORDER_FAIL,
  PAY_ORDER_REQUEST,
  PAY_ORDER_SUCCESS,
  PAY_ORDER_FAIL,
  ORDER_PAY_RESET,
  MY_ORDER_LIST_REQUEST,
  MY_ORDER_LIST_SUCCESS,
  MY_ORDER_LIST_FAIL,
} from "../constants/OrderConstants"

const createOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return { ...state, loading: true }
    case CREATE_ORDER_SUCCESS:
      return { ...state, loading: false, success: true, order: action.payload }
    case CREATE_ORDER_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const orderDetailsReducer = (
  state = { orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case DETAILS_ORDER_REQUEST:
      return { ...state, loading: true }
    case DETAILS_ORDER_SUCCESS:
      return { ...state, loading: false, orders: action.payload }
    case DETAILS_ORDER_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case PAY_ORDER_REQUEST:
      return { ...state, loading: true }
    case PAY_ORDER_SUCCESS:
      return { ...state, loading: false, success: true }
    case PAY_ORDER_FAIL:
      return { ...state, loading: false, error: action.payload }
    case ORDER_PAY_RESET:
      return {}
    default:
      return state
  }
}

const orderMyListReducer = (state = {}, action) => {
  switch (action.type) {
    case MY_ORDER_LIST_REQUEST:
      return { ...state, loading: true }
    case MY_ORDER_LIST_SUCCESS:
      return { ...state, loading: false, orders: action.payload }
    case MY_ORDER_LIST_FAIL:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

export {
  createOrderReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderMyListReducer,
}

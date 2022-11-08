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
  USER_SIGN_UP_FAIL,
  USER_SIGN_UP_REQUEST,
  USER_SIGN_UP_SUCCESS,
} from "../constants/userConstants"

const userLoginReducers = (state = { userInfo: null }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
const userSignUpReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGN_UP_REQUEST:
      return { loading: true }
    case USER_SIGN_UP_SUCCESS:
      return { ...state, loading: false, success: true }
    case USER_SIGN_UP_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      }
    default:
      return state
  }
}

const userLogOutReducer = (state = { success: null }, action) => {
  switch (action.type) {
    case USER_LOG_OUT_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, success: true }
    case USER_LOG_OUT_FAIL:
      return { ...state, loading: false, success: false }
    default:
      return state
  }
}

const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true }
    case USER_LIST_SUCCESS:
      return { ...state, loading: false, users: action.payload }
    case USER_LIST_FAIL:
      return { ...state, loading: false, error: action.payload }
    case USER_LIST_RESET:
      return { users: [] }
    default:
      return state
  }
}

const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true }
    case USER_DELETE_SUCCESS:
      return { loading: false, success: true }
    case USER_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export {
  userLoginReducers,
  userSignUpReducer,
  userLogOutReducer,
  userListReducer,
  userDeleteReducer,
}

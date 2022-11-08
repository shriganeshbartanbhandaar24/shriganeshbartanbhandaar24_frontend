import { combineReducers } from "redux"
import {
  userLoginReducers,
  userSignUpReducer,
  userLogOutReducer,
  userListReducer,
  userDeleteReducer,
} from "./userReducers"

import {
  productDetailsReducers,
  showAllProductsReducers,
} from "./ProductReducer"
import { cartReducers } from "./CartReducer"
import {
  createOrderReducer,
  orderDetailsReducer,
  orderMyListReducer,
  orderPayReducer,
} from "./orderReducers"

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
  showAllProducts: {
    productList: null,
  },
  getProductDetails: {
    productDetails: null,
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItens"))
      : [],
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : [],
  },
}

const rootReducers = combineReducers({
  userLogin: userLoginReducers,
  userSignUp: userSignUpReducer,
  userLogOut: userLogOutReducer,
  showAllProducts: showAllProductsReducers,
  getProductDetails: productDetailsReducers,
  cart: cartReducers,
  createOrder: createOrderReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderMyList: orderMyListReducer,
  //admin
  userList: userListReducer,
  userDelete: userDeleteReducer,
})

export { initialState }
export default rootReducers

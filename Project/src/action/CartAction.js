import backendAPI from '../apis/userApi'
import {
  CART_ADD_ITEMS,
  CART_REMOVE_ITEMS,
  CHANGE_PRODUCT_QUANTITY,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/CartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await backendAPI.get(`/products/${id}`)
  dispatch({
    type: CART_ADD_ITEMS,
    payload: {
      product: data[0]._id,
      name: data[0].name,
      image: data[0].image,
      price: data[0].price,
      countInStock: data[0].countInStock,
      qty,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEMS, payload: id })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const changeProductQuantity =
  (item, qty) => async (dispatch, getState) => {
    dispatch({ type: CHANGE_PRODUCT_QUANTITY, payload: { ...item, qty } })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  }

export const saveShippingAddress = (data) => async (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data })
  localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => async (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data })
  localStorage.setItem('paymentMethod', JSON.stringify(data))
}

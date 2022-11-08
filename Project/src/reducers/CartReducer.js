import {
  CART_ADD_ITEMS,
  CART_REMOVE_ITEMS,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/CartConstants.js'

export const cartReducers = (
  state = { cartItems: [], shippingAddress: [] },
  action
) => {
  var existItem = null
  // console.log('cartItesm now', action.payload)
  switch (action.type) {
    case CART_ADD_ITEMS:
      const item = action.payload
      console.log('state cartItems', state.cartItems)
      if (state.cartItems && state.cartItems.length > 0) {
        console.log('Hello 3')
        existItem = state.cartItems.find((x) => x.product === item.product)
      }

      if (existItem) {
        console.log('Hello 1')
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === item.product ? item : x
          ),
        }
      } else {
        console.log('Hello 2', state.cartItems, 'Item ', item)
        return { ...state, cartItems: [...state.cartItems, item] }
      }
    case CART_REMOVE_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      }
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      }
    case CART_SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload }

    default:
      return state
  }
}

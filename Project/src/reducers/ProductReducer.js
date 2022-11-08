import {
  ALL_PRODUCTS_FAIL,
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from '../constants/ProductsConstant'

const showAllProductsReducers = (state = { productList: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCTS_REQUEST:
      return { loading: true }
    case ALL_PRODUCTS_SUCCESS:
      return { ...state, loading: false, productList: action.payload }
    case ALL_PRODUCTS_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const productDetailsReducers = (state = { productDetails: [] }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true }
    case PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, productDetails: action.payload }
    case PRODUCT_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export { showAllProductsReducers, productDetailsReducers }

import { CartActions, CartState, CartTypes } from "./cart.types"

const initialState: CartState = {
  isLoading: true,
  cartItems: [],
  errorMessage: null,
}

export default (state = initialState, action: CartActions) => {
  switch (action.type) {
    case CartTypes.LOAD_CART_ITEMS:
      return {
        ...state,
        isLoading: true,
      }
    case CartTypes.SET_CART_ITEMS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        cartItems: action.payload
      }
    case CartTypes.CART_ITEMS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        cartItems: [],
      }

    default:
      return state
  }
}

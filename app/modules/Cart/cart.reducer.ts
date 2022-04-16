import { CartActions, CartStateType, CartTypes } from "./cart.types"

const initialState: CartStateType = {
  isLoading: true,
  cartItems: [],
  errorMessage: null,
}

export default (state = initialState, action: CartActions): CartStateType => {
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
        cartItems: action.payload,
      }
    case CartTypes.SET_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        cartItems: [],
      }

    case CartTypes.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cartItems: [action.payload, ...state.cartItems],
      }
    
    case CartTypes.REMOVE_PRODUCT_FROM_CART:
      const id = action.payload   
      const cartItemToRemoveIdx = state.cartItems.findIndex(items => items.cartItemId === id)

      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, cartItemToRemoveIdx),
          ...state.cartItems.slice(cartItemToRemoveIdx + 1)
        ]
      }


    default:
      return state
  }
}

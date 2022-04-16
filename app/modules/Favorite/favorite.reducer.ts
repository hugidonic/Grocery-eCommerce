import { FavoriteStateType, FavoriteTypes, FavoriteActions } from "./favorite.types"

const initialState: FavoriteStateType = {
  isLoading: true,
  errorMessage: '',
  favoriteItems: [],
}

export default (state = initialState, action: FavoriteActions): FavoriteStateType => {
  switch (action.type) {
    case FavoriteTypes.LOAD_FAVORITE_ITEMS:
			return {
				...state,
				isLoading: true,
				errorMessage: '',
			}
		case FavoriteTypes.SET_FAVORITE_ITEMS:
			return {
				...state,
				isLoading: false,
				errorMessage: '',
				favoriteItems: action.payload
			}
		case FavoriteTypes.SET_ERROR:
			return {
				...state,
				isLoading: false,
				favoriteItems: [],
				errorMessage: action.payload
			}

		case FavoriteTypes.ADD_PRODUCT_TO_FAVORITE:
			return {
				...state,
				favoriteItems: [action.payload, ...state.favoriteItems]
			}

		case FavoriteTypes.REMOVE_PRODUCT_FROM_FAVORITE:
			const id = action.payload
			const favItemToDeleteIdx = state.favoriteItems.findIndex(items => items.productId === id)

			return {
				...state,
				favoriteItems: [
					...state.favoriteItems.slice(0, favItemToDeleteIdx),
					...state.favoriteItems.slice(favItemToDeleteIdx+1)
				]
			}
    default:
     return state
  }
}

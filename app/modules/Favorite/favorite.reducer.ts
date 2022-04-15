import { FavoriteStateType, FavoriteTypes, FavoriteActions } from "./favorite.types"

const initialState: FavoriteStateType = {
  isLoading: true,
  errorMessage: '',
  favoriteItems: [],
}

export default (state = initialState, action: FavoriteActions) => {
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
				products: action.payload
			}
		case FavoriteTypes.SET_ERROR:
			return {
				...state,
				isLoading: false,
				products: [],
				errorMessage: action.payload
			}
    default:
     return state
  }
}

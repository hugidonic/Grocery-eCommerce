import { CategoriesActions, CategoriesTypes, CategoryStateType } from "./categories.types"

const initialState: CategoryStateType = {
  isLoading: true,
  errorMessage: null,
  categories: []
}

export default (state = initialState, action: CategoriesActions): CategoryStateType => {
  switch (action.type) {
    case CategoriesTypes.LOAD_CATEGORIES:
      return {
        ...state,
        isLoading: true,
      }
    case CategoriesTypes.SET_CATEGORIES:
      return {
        ...state,
        isLoading: false,
        categories: action.payload,
        errorMessage: null,
      }

    case CategoriesTypes.ERROR_CATEGORIES:
      return {
        ...state,
        isLoading: false,
        categories: [],
        errorMessage: action.payload
      }
    
    default:
      return state
  }
}

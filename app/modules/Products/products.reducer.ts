import { ProductsActions, ProductsTypes } from './products.types';
import { ProductsState} from './products.types';

const initialState: ProductsState = {
	isLoading: true,
	errorMessage: null,
	products: [],
};

export default (state = initialState, action: ProductsActions): ProductsState=> {
	switch (action.type) {
		case ProductsTypes.LOAD_PRODUCTS:
			return {
				...state,
				isLoading: true,
				errorMessage: '',
			}
		case ProductsTypes.SET_PRODUCTS:
			return {
				...state,
				isLoading: false,
				errorMessage: '',
				products: action.payload
			}
		case ProductsTypes.SET_ERROR:
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

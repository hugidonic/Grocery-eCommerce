import { ProductsActions, ProductsTypes } from './products.types';
import { ProductsStateType } from './products.types';

const initialState: ProductsStateType = {
	isLoading: true,
	errorMessage: null,
	products: [],
};

export default (state = initialState, action: ProductsActions): ProductsStateType=> {
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

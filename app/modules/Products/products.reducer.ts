import { ProductsActions, ProductsTypes } from './products.actions';
import { ProductsState} from './products.types';


const initialState: ProductsState = {
	loading: true,
	errorMessage: '',
	products: null,
};

export default (state = initialState, action: ProductsActions): ProductsState=> {
	switch (action.type) {
		case ProductsTypes.LOAD_PRODUCTS:
			return {
				...state,
				loading: true,
				errorMessage: '',
			}
		case ProductsTypes.SET_PRODUCTS:
			return {
				...state,
				loading: false,
				errorMessage: '',
				products: action.payload
			}
		case ProductsTypes.SET_ERROR:
			return {
				...state,
				loading: false,
				products: null,
				errorMessage: action.payload
			}

		default:
			return state
	}
}

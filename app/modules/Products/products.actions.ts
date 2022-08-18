import { ProductsActions, ProductsTypes } from './products.types';
import { Dispatch } from 'redux';
import { data } from '../../utils/data';

/**
 * Load products from data.ts and pass to store
 */
export const loadProducts = () => async (dispatch: Dispatch<ProductsActions>) => {
	dispatch({
		type: ProductsTypes.LOAD_PRODUCTS
	});
	try {
		const products = data.products.all
		dispatch({
			type: ProductsTypes.SET_PRODUCTS,
			payload: products
		});
	} catch (error) {
		dispatch({ type: ProductsTypes.SET_ERROR, payload: error.message });
	}
};

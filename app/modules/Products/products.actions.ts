import { ProductsActions, ProductsTypes, ProductType } from './products.types';
import { Dispatch } from 'redux';
import { load } from '../../utils/storage';
import { data } from '../../utils/data';

/**
 * Loads products from async storage and passes it to store
 */
export const loadProducts = () => async (dispatch: Dispatch<ProductsActions>) => {
	dispatch({
		type: ProductsTypes.LOAD_PRODUCTS
	});
	try {
		const products = await load<ProductType[]>('PRODUCTS') ?? data.products.all; 
		dispatch({
			type: ProductsTypes.SET_PRODUCTS,
			payload: products
		});
	} catch (error) {
		dispatch({ type: ProductsTypes.SET_ERROR, payload: error.message });
	}
};

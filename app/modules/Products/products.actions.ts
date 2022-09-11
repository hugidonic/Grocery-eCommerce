import { ProductsActions, ProductsTypes } from './products.types';
import { Dispatch } from 'redux';
import { API } from '../../services/api';

/**
 * Load products from local server and pass to store
 */
export const loadProducts = (api: API) => async (dispatch: Dispatch<ProductsActions>) => {
	dispatch({
		type: ProductsTypes.LOAD_PRODUCTS
	});
	try {
		const response = await api.getProducts()

		// TODO: from api we can get error message however in apisauce we dont handle it 
		// Throw an error if the response is not OK
		if (response.kind !== 'ok') throw new Error(response.kind)

		dispatch({
			type: ProductsTypes.SET_PRODUCTS,
			payload: response.products
		});

	} catch (error) {
		dispatch({ type: ProductsTypes.SET_ERROR, payload: error.message });
	}
};

import { ProductsActions, ProductsTypes } from './products.types';
import { Dispatch } from 'redux';
import { API } from '../../redux/store';
import { GetProductsResult } from '../../services/api';

export const loadProducts = () => async (dispatch: Dispatch<ProductsActions>) => {
	try {
		const response: GetProductsResult = await API.getProducts();
		if (response.kind === 'ok') {
			dispatch({ type: ProductsTypes.SET_PRODUCTS, payload: response.products });
		} else {
			throw new Error(response.kind);
		}
	} catch (error) {
		dispatch({ type: ProductsTypes.SET_ERROR, payload: error.message });
	}
};

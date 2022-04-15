import { ProductsActions, ProductsTypes } from './products.types';
import { Dispatch } from 'redux';
import { API } from '../../redux/store';

export const loadProducts = () => async (dispatch: Dispatch<ProductsActions>) => {
	try {
		
	} catch (error) {
		dispatch({ type: ProductsTypes.SET_ERROR, payload: error.message });
	}
};

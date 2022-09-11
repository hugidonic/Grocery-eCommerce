import { CategoriesActions, CategoriesTypes} from './categories.types';
import { Dispatch } from 'redux';
import { API } from '../../services/api';

/**
 * Load categories from data.ts and pass it to store
 */
export const loadCategories = (api: API) => async (dispatch: Dispatch<CategoriesActions>) => {
	dispatch({
		type: CategoriesTypes.LOAD_CATEGORIES
	});
	try {
		const response = await api.getCategories()
		
		// Throw an error if the response is not OK
		if (response.kind !== 'ok') throw new Error(response.kind)
		
		dispatch({
			type: CategoriesTypes.SET_CATEGORIES,
			payload: response.categories
			
		});
	} catch (error) {
		dispatch({ type: CategoriesTypes.SET_ERROR, payload: error.message });
	}
};

import { CategoriesActions, CategoriesTypes, CategoryType} from './categories.types';
import { Dispatch } from 'redux';
import { data } from '../../utils/data';

/**
 * Load categories from data.ts and pass it to store
 */
export const loadCategories = () => async (dispatch: Dispatch<CategoriesActions>) => {
	dispatch({
		type: CategoriesTypes.LOAD_CATEGORIES
	});
	try {
		const categories: CategoryType[] = data.categories
		dispatch({
			type: CategoriesTypes.SET_CATEGORIES,
			payload: categories
		});
	} catch (error) {
		dispatch({ type: CategoriesTypes.SET_ERROR, payload: error.message });
	}
};

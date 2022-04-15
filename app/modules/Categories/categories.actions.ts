import { CategoriesActions, CategoriesTypes, CategoryType} from './categories.types';
import { Dispatch } from 'redux';
import { load } from '../../utils/storage';
import { data } from '../../utils/data';

/**
 * Loads Categories from async storage and passes it to store
 */
export const loadCategories = () => async (dispatch: Dispatch<CategoriesActions>) => {
	dispatch({
		type: CategoriesTypes.LOAD_CATEGORIES
	});
	try {
		const categories = await load<CategoryType[]>('CATEGORIES') ?? data.categories;
		dispatch({
			type: CategoriesTypes.SET_CATEGORIES,
			payload: categories
		});
	} catch (error) {
		dispatch({ type: CategoriesTypes.SET_ERROR, payload: error.message });
	}
};

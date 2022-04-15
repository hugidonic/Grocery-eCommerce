import { FavoriteActions, FavoriteTypes, FavoriteItemType } from './favorite.types';
import { Dispatch } from 'redux';
import { load } from '../../utils/storage';

/**
 * Loads favorite items from async storage and passes it to store
 */
export const loadFavoriteItems = () => async (dispatch: Dispatch<FavoriteActions>) => {
	dispatch({
		type: FavoriteTypes.LOAD_FAVORITE_ITEMS
	});
	try {
		const favoriteItems = await load<FavoriteItemType[]>('FAVORITE_ITEMS') ?? [];
		dispatch({
			type: FavoriteTypes.SET_FAVORITE_ITEMS,
			payload: favoriteItems
		});
	} catch (error) {
		dispatch({ type: FavoriteTypes.SET_ERROR, payload: error.message });
	}
};

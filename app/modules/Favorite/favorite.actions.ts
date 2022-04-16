import { FavoriteActions, FavoriteTypes, FavoriteItemType } from './favorite.types';
import { Dispatch } from 'redux';
import { load, save, STORAGE_KEYS } from '../../utils/storage';
import { ProductType } from '../Products';
import { RootStateType } from '../../redux/store';

/**
 * Loads favorite items from async storage and passes it to store
 */
export const loadFavoriteItems = () => async (dispatch: Dispatch<FavoriteActions>) => {
	dispatch({
		type: FavoriteTypes.LOAD_FAVORITE_ITEMS
	});
	try {
		const favoriteItems = await load<FavoriteItemType[]>(STORAGE_KEYS.FAVORITE_ITEMS) ?? [];
		dispatch({
			type: FavoriteTypes.SET_FAVORITE_ITEMS,
			payload: favoriteItems
		});
	} catch (error) {
		dispatch({ type: FavoriteTypes.SET_ERROR, payload: error.message });
	}
};

export const addProductToFavorite = (product: ProductType) => (
	dispatch: Dispatch<FavoriteActions>,
	getState: () => RootStateType
) => {
	const favoriteItem: FavoriteItemType = {
		...product
	};

	const isProductInList = getState()
		.FavoriteStore.favoriteItems
		.findIndex(product => product.productId === favoriteItem.productId) >= 0


	if (isProductInList) return

	dispatch({
		type: FavoriteTypes.ADD_PRODUCT_TO_FAVORITE,
		payload: favoriteItem
	});

	const newFavoriteItems = getState().FavoriteStore.favoriteItems
	save<FavoriteItemType[]>(STORAGE_KEYS.FAVORITE_ITEMS, newFavoriteItems)
};

export const removeProductFromFavorite = (productId: FavoriteItemType['productId']) => (
	dispatch: Dispatch<FavoriteActions>,
	getState: () => RootStateType
) => {
	dispatch({
		type: FavoriteTypes.REMOVE_PRODUCT_FROM_FAVORITE,
		payload: productId
	});

	const newFavoriteItems = getState().FavoriteStore.favoriteItems
	save<FavoriteItemType[]>(STORAGE_KEYS.FAVORITE_ITEMS, newFavoriteItems)
};

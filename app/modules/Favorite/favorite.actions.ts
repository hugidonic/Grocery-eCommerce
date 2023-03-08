import { FavoriteActions, FavoriteTypes } from './favorite.types';
import { Dispatch } from 'redux';
import { load, save, STORAGE_KEYS } from '../../utils/storage';
import { ProductType } from '../Products';
import { RootStateType } from '../../redux/store';

const updateFavoriteItemsInStorage = (getState: () => RootStateType) => {
	// Also take new favorite items list from store 
	const newFavoriteItems = getState().FavoriteStore.favoriteItems
	// And pass it to async storage
	save<ProductType[]>(STORAGE_KEYS.FAVORITE_ITEMS, newFavoriteItems)
}

/**
 * Loads favorite items from async storage and passes it to store
 */
export const loadFavoriteItems = () => async (dispatch: Dispatch<FavoriteActions>) => {
	// Dispatch loading action
	dispatch({
		type: FavoriteTypes.LOAD_FAVORITE_ITEMS
	});
	try {
		/**
		 * TODO:
		 * ? Move the cart items list to local server cos cartItems ids gonna be redefined on server rerun
		 */
		// Take favprite items from storage
		// if obj is nullable then return empty array
		const favoriteItems = await load<ProductType[]>(STORAGE_KEYS.FAVORITE_ITEMS) ?? [];
		// Dispatch favroite items to the store
		dispatch({
			type: FavoriteTypes.SET_FAVORITE_ITEMS,
			payload: favoriteItems
		});
	} catch (error) {
		dispatch({ type: FavoriteTypes.SET_ERROR, payload: error.message });
	}
};

/**
 * Adds a new favorite item to the favorite list
 */
export const addProductToFavorite = (product: ProductType) => (
	dispatch: Dispatch<FavoriteActions>,
	getState: () => RootStateType
) => {
	// Make favorite item from the product
	const favoriteItem: ProductType = {
		...product
	};
	// Check if the product is already in the favorite list
	const isProductInList = getState()
		.FavoriteStore.favoriteItems
		.findIndex(product => product.productId === favoriteItem.productId) >= 0
		
	if (isProductInList) return

	// Dispatch Favorite items to the store
	dispatch({
		type: FavoriteTypes.ADD_PRODUCT_TO_FAVORITE,
		payload: favoriteItem
	});

	updateFavoriteItemsInStorage(getState)
};

/**
 * Removes a favorite item from the favorite list
 */
export const removeProductFromFavorite = (productId: ProductType['productId']) => (
	dispatch: Dispatch<FavoriteActions>,
	getState: () => RootStateType
) => {
	// Dispatch product ID to remove from favorite list
	dispatch({
		type: FavoriteTypes.REMOVE_PRODUCT_FROM_FAVORITE,
		payload: productId
	});

	updateFavoriteItemsInStorage(getState)
};

/**
 * Clears the whole favorite list
 */
export const clearFavoriteList = (
	dispatch: Dispatch<FavoriteActions>,
	getState: () => RootStateType
) => {
	// Sets list to empry array 
	updateFavoriteItemsInStorage(getState)
	
	return dispatch({
		type: FavoriteTypes.SET_FAVORITE_ITEMS,
		payload: [],
	})
}
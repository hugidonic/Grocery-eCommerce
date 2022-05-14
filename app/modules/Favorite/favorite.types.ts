import { BaseInitialState } from '../../redux/store';
import { ProductType } from '../Products';

export enum FavoriteTypes {
	SET_ERROR = 'SET_ERROR',
	LOAD_FAVORITE_ITEMS = 'LOAD_FAVORITE_ITEMS',

	SET_FAVORITE_ITEMS = 'SET_FAVORITE_ITEMS',
	ADD_PRODUCT_TO_FAVORITE = 'ADD_PRODUCT_TO_FAVORITE',
	REMOVE_PRODUCT_FROM_FAVORITE = 'REMOVE_PRODUCT_FROM_FAVORITE',
}

interface LoadFavoriteItemsAction {
	type: FavoriteTypes.LOAD_FAVORITE_ITEMS;
}
export interface SetFavoriteItemsAction {
	type: FavoriteTypes.SET_FAVORITE_ITEMS;
	payload: FavoriteItemType[];
}
interface SetErrorAction {
	type: FavoriteTypes.SET_ERROR;
	payload: string;
}

interface AddProductToFavoriteAction {
	type: FavoriteTypes.ADD_PRODUCT_TO_FAVORITE;
	payload: FavoriteItemType;
}
interface RemoveProductFromFavoriteAction {
	type: FavoriteTypes.REMOVE_PRODUCT_FROM_FAVORITE;
	payload: FavoriteItemType['productId'];
}

/**
 * Actions that can be used in reducer
 */
export type FavoriteActions =
	| LoadFavoriteItemsAction
	| SetFavoriteItemsAction
	| RemoveProductFromFavoriteAction
	| AddProductToFavoriteAction
	| SetErrorAction;

export interface FavoriteStateType extends BaseInitialState {
	favoriteItems: FavoriteItemType[];
}

export interface FavoriteItemType extends ProductType {}

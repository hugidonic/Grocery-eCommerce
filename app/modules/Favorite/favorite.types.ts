import { BaseInitialState } from '../../redux/store';
import { ProductType } from '../Products';

export enum FavoriteTypes {
	SET_ERROR = 'SET_ERROR',
	LOAD_FAVORITE_ITEMS = 'LOAD_FAVORITE_ITEMS',
	SET_FAVORITE_ITEMS = 'SET_FAVORITE_ITEMS'
}

interface LoadFavoriteItemsAction {
	type: FavoriteTypes.LOAD_FAVORITE_ITEMS;
}
interface SetFavoriteItemsAction {
	type: FavoriteTypes.SET_FAVORITE_ITEMS;
	payload: ProductType[];
}
interface SetErrorAction {
	type: FavoriteTypes.SET_ERROR;
	payload: string;
}

/**
 * Actions that can be used in reducer
 */
export type FavoriteActions =
	| LoadFavoriteItemsAction
	| SetFavoriteItemsAction
	| SetErrorAction;

export interface FavoriteStateType extends BaseInitialState {
	favoriteItems: FavoriteItemType[];
}

export interface FavoriteItemType extends ProductType {}

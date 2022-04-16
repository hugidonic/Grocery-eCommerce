import { RootStateType } from '../../redux/store';
import { FavoriteItemType } from './favorite.types';
import { createSelector } from 'reselect';

export const favoriteItems = (state: RootStateType) => state.FavoriteStore.favoriteItems;

export const isFavorite = (favoriteItemId: FavoriteItemType['productId']) =>
	createSelector(favoriteItems, (favoriteItems) => {
    return favoriteItems.findIndex(item => item.productId === favoriteItemId) >= 0
  }
		
	);

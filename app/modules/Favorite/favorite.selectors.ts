import { RootStateType } from '../../redux/store';
import { createSelector } from 'reselect';
import { ProductType } from '../Products';

export const favoriteItems = (state: RootStateType) => state.FavoriteStore.favoriteItems;

export const isFavorite = (favoriteItemId: ProductType['productId']) =>
	createSelector(favoriteItems, (favoriteItems) => {
    return favoriteItems.findIndex(item => item.productId === favoriteItemId) >= 0
  }
);

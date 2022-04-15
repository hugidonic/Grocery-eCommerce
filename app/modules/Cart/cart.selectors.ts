import { createSelector } from 'reselect';
import { RootStateType } from '../../redux/store';
import { CartItemType } from './cart.types';

export const cartItems = (state: RootStateType) => state.CartStore.cartItems;

export const totalCost = createSelector(cartItems, (cartItems) =>
	cartItems.reduce(
		(prevTotalCost: number, nextCartItem: CartItemType) =>
			prevTotalCost + nextCartItem.count * nextCartItem.product.price,
		0
	)
);

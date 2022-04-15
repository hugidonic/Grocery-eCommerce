import { CartActions, CartTypes, CartItemType } from './cart.types';
import { Dispatch } from 'redux';
import { load } from '../../utils/storage';

/**
 * Loads cart items from async storage and passes it to store
 */
export const loadCartItems = () => async (dispatch: Dispatch<CartActions>) => {
	dispatch({
		type: CartTypes.LOAD_CART_ITEMS
	});
	try {
		const cartItems = await load<CartItemType[]>('CART_ITEMS') ?? [];
		dispatch({
			type: CartTypes.SET_CART_ITEMS,
			payload: cartItems
		});
	} catch (error) {
		dispatch({ type: CartTypes.SET_ERROR, payload: error.message });
	}
};

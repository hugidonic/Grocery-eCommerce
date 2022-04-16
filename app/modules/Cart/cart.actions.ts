import { CartActions, CartTypes, CartItemType } from './cart.types';
import { Dispatch } from 'redux';
import { load, save, STORAGE_KEYS } from '../../utils/storage';
import { ProductType } from '../Products';
import uuid from '../../utils/uuid';
import { RootStateType } from '../../redux/store';

/**
 * Loads cart items from async storage and passes it to store
 */
export const loadCartItems = () => async (dispatch: Dispatch<CartActions>) => {
	dispatch({
		type: CartTypes.LOAD_CART_ITEMS
	});
	try {
		const cartItems = await load<CartItemType[]>(STORAGE_KEYS.CART_ITEMS) ?? [];
		dispatch({
			type: CartTypes.SET_CART_ITEMS,
			payload: cartItems
		});
	} catch (error) {
		dispatch({ type: CartTypes.SET_ERROR, payload: error.message });
	}
};

/**
 * Add product to the cartlist and storage
 */
export const addProductToCart = (product: ProductType) => async (
	dispatch: Dispatch<CartActions>,
	getState: () => RootStateType
) => {
	const newCartItem: CartItemType = {
		product,
		cartItemId: uuid(),
		count: 1
	};

	const isProductInList = getState()
		.CartStore.cartItems
		.findIndex(item => item.product.productId === newCartItem.product.productId) >= 0

	if (isProductInList) return

	dispatch({
		type: CartTypes.ADD_PRODUCT_TO_CART,
		payload: newCartItem
	});

	const newCartItems: CartItemType[] = getState().CartStore.cartItems;
	save<CartItemType[]>(STORAGE_KEYS.CART_ITEMS, newCartItems);
};

/**
 * Removes a product from cartList and storage
 */
export const removeProductFromCart = (cartItemId: CartItemType['cartItemId']) => async (
	dispatch: Dispatch<CartActions>,
	getState: () => RootStateType
) => {
	dispatch({
		type: CartTypes.REMOVE_PRODUCT_FROM_CART,
		payload: cartItemId
	});

	const newCartItems: CartItemType[] = getState().CartStore.cartItems;
	save<CartItemType[]>('CART_ITEMS', newCartItems);
};


export const updateCartItem = (
	cartItem: CartItemType
) => (
	dispatch: Dispatch<CartActions>,
	getState: () => RootStateType
) => {
	dispatch({
		type: CartTypes.UPDATE_CART_ITEM_COUNT,
		payload: cartItem
	})
}
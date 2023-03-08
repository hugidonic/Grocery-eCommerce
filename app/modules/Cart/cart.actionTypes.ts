import { CartItemType } from "./cart.types";

export enum CartTypes {
	LOAD_CART_ITEMS = 'LOAD_CART_ITEMS',
	SET_CART_ITEMS = 'SET_CART_ITEMS',
	SET_ERROR = 'SET_ERROR',
	ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
	REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
	UPDATE_CART_ITEM = 'UPDATE_CART_ITEM'
}

interface LoadCartItemsAction {
	type: CartTypes.LOAD_CART_ITEMS;
}
interface SetCartItemsAction {
	type: CartTypes.SET_CART_ITEMS;
	payload: CartItemType[];
}
interface CartItemsErrorAction {
	type: CartTypes.SET_ERROR;
	payload: string;
}

interface AddProductToCartAction {
	type: CartTypes.ADD_PRODUCT_TO_CART;
	payload: CartItemType;
}
interface RemoveProductFromCartAction {
	type: CartTypes.REMOVE_PRODUCT_FROM_CART;
	payload: CartItemType['cartItemId'];
}
interface UpdateCartItemAction {
	type: CartTypes.UPDATE_CART_ITEM;
	payload: CartItemType;
}

export type CartActions =
	| LoadCartItemsAction
	| SetCartItemsAction
	| UpdateCartItemAction
	| RemoveProductFromCartAction
	| CartItemsErrorAction
	| AddProductToCartAction;

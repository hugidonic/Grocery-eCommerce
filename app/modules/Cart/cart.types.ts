import { BaseInitialState } from '../../redux/store';
import { ProductType } from '../Products/products.types';

export enum CartTypes {
	LOAD_CART_ITEMS = 'LOAD_CART_ITEMS',
	SET_CART_ITEMS = 'SET_CART_ITEMS',
	SET_ERROR = 'SET_ERROR',
	ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
	REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
	UPDATE_CART_ITEM_COUNT = 'UPDATE_CART_ITEM_COUNT'
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
interface UpdateCartItemCountAction {
	type: CartTypes.UPDATE_CART_ITEM_COUNT;
	payload: CartItemType;
}

export type CartActions =
	| LoadCartItemsAction
	| SetCartItemsAction
	| UpdateCartItemCountAction
	| RemoveProductFromCartAction
	| CartItemsErrorAction
	| AddProductToCartAction;

export interface CartStateType extends BaseInitialState {
	cartItems: CartItemType[];
}

export type CartItemType = {
	cartItemId: string;
	product: ProductType;
	count: number;
};

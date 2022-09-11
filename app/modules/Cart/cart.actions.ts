// Redux and stuff
import { Dispatch } from 'redux';
// Actions
import { CartActions, CartTypes } from './cart.actionTypes';
// Async Storage
import { load, save, STORAGE_KEYS } from '../../utils/storage';
// Types
import { CartItemType } from './cart.types';
import { ProductType } from '../Products';
import { RootStateType } from '../../redux/store';
// Favroite Actions
import { SetFavoriteItemsAction } from '../Favorite';
import { clearFavoriteList } from '../Favorite/favorite.actions';


const updateCartItemsInStorage = (getState: () => RootStateType) => {
	// Also take new cart items list from store 
	const newCartItems: CartItemType[] = getState().CartStore.cartItems;
	// And pass it to async storage
	save<CartItemType[]>(STORAGE_KEYS.CART_ITEMS, newCartItems);
}

/**
 * Loads cart items from async storage and passes it to store
 */
export const loadCartItems = () => async (dispatch: Dispatch<CartActions>) => {
	// Dispatching loading action
	dispatch({
		type: CartTypes.LOAD_CART_ITEMS
	});

	try {
		/**
		 * TODO:
		 * ? Move the cart items list to local server cos cartItems ids gonna be redefined on server rerun
		 */
		// Take cart items from storage
		// if obj is nullable then return empty array
		const cartItems = await load<CartItemType[]>(STORAGE_KEYS.CART_ITEMS) ?? [];
		// Dispatch setting items form storage
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
	// Make cart item from product
	const newCartItem: CartItemType = {
		product,
		cartItemId: product.productId,
		count: 1
	};
	// Check if the cart list already contains the adding product
	const isProductInList = getState()
		.CartStore.cartItems
		.findIndex(item => item.cartItemId === newCartItem.cartItemId) >= 0

	if (isProductInList) return

	// If product isn't in the list, add it to the cart list
	dispatch({
		type: CartTypes.ADD_PRODUCT_TO_CART,
		payload: newCartItem
	});

	// Also take new cart items list from store And pass it to async storage
	updateCartItemsInStorage(getState)
};

/**
 * Removes a product from cartList and storage
 */
export const removeProductFromCart = (cartItemId: CartItemType['cartItemId']) => async (
	dispatch: Dispatch<CartActions>,
	getState: () => RootStateType
) => {
	// Take the ID of cart item to remove and dispatch it
	dispatch({
		type: CartTypes.REMOVE_PRODUCT_FROM_CART,
		payload: cartItemId
	});

	// Also take new cart items list from store And pass it to async storage
	updateCartItemsInStorage(getState)
};

/**
 * Updates the cart item in the cart list
 */
export const updateCartItem = (
	cartItem: CartItemType
) => (
	dispatch: Dispatch<CartActions>,
	getState: () => RootStateType
) => {
	// Take the cart item to update and dispatch it to store
	dispatch({
		type: CartTypes.UPDATE_CART_ITEM,
		payload: cartItem
	})
	// Also take new cart items list from store And pass it to async storage
	updateCartItemsInStorage(getState)
}

/**
 * Add all favoriteItems from favorite list to cart list
 * Clear Favorite List
 */
export const addAllFavoriteToCart = () => (
	dispatch: Dispatch<CartActions | SetFavoriteItemsAction>,
	getState: () => RootStateType
) => {
	// Take all favorite items and make them into cart items
	const cartItemsFromFavorite: CartItemType[] = getState().FavoriteStore.favoriteItems.map(item => {
		return {
			cartItemId: item.productId,
			product: item,
			count: 1,
		}
	})
	// All the cart items from cart list
	const currentCartItems: CartItemType[] = getState().CartStore.cartItems
	
	let newCartItems: CartItemType[] = [...currentCartItems]

	cartItemsFromFavorite.forEach(favCartItem => {
		if (currentCartItems.findIndex(curCartItem => curCartItem.cartItemId === favCartItem.cartItemId) < 0) {
			newCartItems.unshift(favCartItem)
		}
 	});

	// Dispatch it to the CartStore
	dispatch({
		type: CartTypes.SET_CART_ITEMS,
		payload: newCartItems
	})
	// Clear the favorite items list
	dispatch(clearFavoriteList(dispatch, getState))
	// Also take new cart items list from store And pass it to async storage
	updateCartItemsInStorage(getState)
}

export const clearCartList = () => (
	dispatch: Dispatch<CartActions>,
	getState: () => RootStateType
) => {
	dispatch({
		type: CartTypes.SET_CART_ITEMS,
		payload: [],
	})
	save(STORAGE_KEYS.CART_ITEMS, [])
}
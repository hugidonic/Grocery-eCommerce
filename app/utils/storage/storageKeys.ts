export const PRODUCTS = 'PRODUCTS';
export const FAVORITE_ITEMS = 'FAVORITE_ITEMS';
export const CATEGORIES = 'CATEGORIES';
export const CART_ITEMS = 'CART_ITEMS';
export const USER_INFO = 'USER_INFO';
export const ORDER_ITEMS = 'ORDER_ITEMS';

export enum STORAGE_KEYS {
	DEV_STORYBOOK = 'DEV_STORYBOOK',
	PRODUCTS = 'PRODUCTS',
	FAVORITE_ITEMS = 'FAVORITE_ITEMS',
	CATEGORIES = 'CATEGORIES',
	CART_ITEMS = 'CART_ITEMS',
	USER_INFO = 'USER_INFO',
	ORDER_ITEMS = 'ORDER_ITEMS',
}

export type StorageKeys = keyof typeof STORAGE_KEYS





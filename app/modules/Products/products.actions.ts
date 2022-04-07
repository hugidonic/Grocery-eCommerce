import { ProductType } from './products.types';

export enum ProductsTypes {
	SET_ERROR = 'SET_ERROR',
	LOAD_PRODUCTS = 'LOAD_PRODUCTS',
	SET_PRODUCTS = 'SET_PRODUCTS'
}

interface LoadProductsAction {
	type: ProductsTypes.LOAD_PRODUCTS;
}
interface SetProductsAction {
	type: ProductsTypes.SET_PRODUCTS;
	payload: ProductType[];
}
interface SetErrorAction {
	type: ProductsTypes.SET_ERROR;
	payload: string;
}

export type ProductsActions = | LoadProductsAction | SetProductsAction | SetErrorAction;

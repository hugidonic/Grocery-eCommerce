import { BaseInitialState } from "../../redux/store";

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

/**
 * Actions that can be used in reducer
 */
export type ProductsActions = | LoadProductsAction | SetProductsAction | SetErrorAction;

/**
 * The initial state of the products store
 */
export interface ProductsStateType extends BaseInitialState {
	products: ProductType[];
}

export type ProductType = {
	productId: string;

	name: string;
	type: 'fruit' | 'vegetable';
	description: string;
	richDescription?: string;
	price: number;

	pictureUri: string;
};

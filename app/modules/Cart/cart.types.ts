import { BaseInitialState } from '../../redux/store';
import { ProductType } from '../Products/products.types';

export interface CartStateType extends BaseInitialState {
	cartItems: CartItemType[];
}

export type CartItemType = {
	cartItemId: ProductType['productId'];
	product: ProductType;
	count: number;
};

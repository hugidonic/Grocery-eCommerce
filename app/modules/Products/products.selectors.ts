// Reselect
import { createSelector } from 'reselect';
// Types
import { ProductType } from './products.types';
import { RootStateType } from '../../redux/store';
// Cart items selector
import {cartItems} from '../Cart/cart.selectors'

/**
 * returns a list of fruits
 */
export const productStore = (state: RootStateType) => state.ProductStore;

/**
 * returns a list of fruits
 */
export const allProducts = (state: RootStateType) => state.ProductStore.products;


/**
 * returns a list of fruits
 */
export const fruits = createSelector(allProducts, (allProducts) =>
	allProducts && allProducts.filter((product) => product.type === 'fruit')
);

/**
 * returns a list of vegetables
 */
export const vegetables = createSelector(allProducts, (allProducts) =>
	allProducts && allProducts.filter((product) => product.type === 'vegetable')
);

/**
 * Check is the product in cart list
 */
export const isProductInCart = (productId: ProductType['productId']) => (
	createSelector(cartItems, (cartItems) => {
    console.log(productId);
    
    return cartItems.findIndex(item => item.product.productId == productId) >= 0
  })
)

export const productsFilteredByName = (searchName: string) => (
	createSelector(allProducts, (allProducts) => {
    return allProducts.filter(prod => prod.name.toLowerCase().includes(searchName))
  })
)
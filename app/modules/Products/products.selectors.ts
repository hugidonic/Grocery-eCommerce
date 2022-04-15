import { RootStateType } from '../../redux/store';
import { createSelector } from 'reselect';

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

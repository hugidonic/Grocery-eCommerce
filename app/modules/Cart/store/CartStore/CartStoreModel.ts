import { flow, Instance, SnapshotOut, types } from 'mobx-state-tree';
import { CartItemModel, CartItemType } from '../CartItem/CartItemModel';
import { ProductType } from '../../../Products';
import { delay } from '../../../../utils/delay';
import { CartData } from '../../../../utils/data';

/**
 * Model description here for TypeScript hints.
 */
export const CartStoreModel = types
	.model('CartStore')
	.props({
		isLoading: true,
		items: types.optional(types.array(CartItemModel), [])
	})
	.views((self) => ({
		get totalCost(): number {
			return +self.items
				.reduce((totalCost, entry) => totalCost + entry.product.price, 0)
				.toFixed(2);
		}
	}))
	.actions((self) => {
		
		const setLoading = (loading: boolean) => {
			self.isLoading = loading;
		}
		
		const loadCartItemsFromApi = flow(function* () {
			setLoading(true)
			try {
				yield delay(1000)
				CartData.forEach(item => {
					self.items.push(item)
				})
				
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false)
			}
		})
		
		const addProductToCart = (product: ProductType) => {
			self.items.unshift({ product, count: 1 });
		}
		const removeCartItemFromCart = (cartItem: CartItemType) => {
			self.items.remove(cartItem);
		}
		return {
			setLoading,
			loadCartItemsFromApi,
			addProductToCart,
			removeCartItemFromCart
		}
	});

export type CartStoreType = Instance<typeof CartStoreModel>;

type CartStoreSnapshotType = SnapshotOut<typeof CartStoreModel>;
export interface CartStoreSnapshot extends CartStoreSnapshotType {}
export const createCartStoreDefaultModel = () => types.optional(CartStoreModel, {});

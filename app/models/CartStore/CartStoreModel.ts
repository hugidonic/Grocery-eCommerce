// MST
import { destroy, flow, Instance, SnapshotOut, types } from 'mobx-state-tree';
// Types
import { ProductType } from '../../../Products';
// Utils
import uuid from '../../../../utils/uuid';
import { delay } from '../../../../utils/delay';
import { CartDataJSON } from '../../../../utils/data';
// Models
import { CartItemModel, CartItemType } from '../CartItem/CartItemModel';

/**
 * Model description here for TypeScript hints.
 */
export const CartStoreModel = types
	.model('CartStore')
	.props({
		isLoading: true,
		items: types.optional(types.array(types.reference(CartItemModel)), [])
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
		};

		const loadCartItemsFromApi = flow(function*() {
			setLoading(true);
			try {
				// imitating request to server
				yield delay(1000);
				// Cart data from mapping CartItemModel
				const CartData: CartItemType[] = JSON.parse(CartDataJSON);
				// Push each item to store
				CartData.forEach((cartItem) => {
					self.items.push(cartItem);
				});
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		});

		const addProductToCart = (productId: ProductType['productId']) => {
			const newCartItem: CartItemType = CartItemModel.create({
				id: uuid(),
				product: productId
			});
			self.items.unshift(newCartItem);
		};
		const removeCartItemFromCart = (cartItem: CartItemType) => {
			destroy(cartItem);
		};
		return {
			setLoading,
			loadCartItemsFromApi,
			addProductToCart,
			removeCartItemFromCart
		};
	});

export type CartStoreType = Instance<typeof CartStoreModel>;

type CartStoreSnapshotType = SnapshotOut<typeof CartStoreModel>;
export interface CartStoreSnapshot extends CartStoreSnapshotType {}
export const createCartStoreDefaultModel = () => types.optional(CartStoreModel, {});

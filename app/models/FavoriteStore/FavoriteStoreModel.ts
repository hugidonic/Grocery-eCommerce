import { destroy, getParent, Instance, SnapshotOut, types } from 'mobx-state-tree';
import { CartStoreType } from '../../../Cart';
import { ProductModel, ProductType } from '../../../Products/store/Product/ProductModel';

interface RootStore {
	CartStore: CartStoreType;
	// User: types.maybe(UserModel),
	// CartStore: types.maybe(CartStoreModel),
	// FavoriteStore: types.maybe(FavoriteStoreModel),
	// ProductsStore: types.maybe(ProductsStoreModel)
}

/**
 * Model description here for TypeScript hints.
 */
export const FavoriteStoreModel = types
	.model('FavoriteStore')
	.props({
		isLoading: true,
		items: types.optional(types.array(ProductModel), [])
	})
	.views((self) => ({
		get CartStore() {
			return getParent<RootStore>(self).CartStore;
		},
		get IsLoading() {
			return self.isLoading;
		}
	}))
	.actions((self) => {
		const addProductToFavorite = (product: ProductType) => {
			self.items.unshift(product);
		};
		const removeProductFromFavorite = (product: ProductType) => {
			destroy(product);
		};
		const addAllToCart = () => {
			self.items.forEach((product) =>
				self.CartStore.addProductToCart(product.productId)
			);
		};

		return {
			addProductToFavorite,
			removeProductFromFavorite,
			addAllToCart
		};
	});

export type FavoriteStoreType = Instance<typeof FavoriteStoreModel>;

type FavoriteStoreSnapshotType = SnapshotOut<typeof FavoriteStoreModel>;
export interface FavoriteStoreSnapshot extends FavoriteStoreSnapshotType {}
export const createFavoriteStoreDefaultModel = () =>
	types.optional(FavoriteStoreModel, {});

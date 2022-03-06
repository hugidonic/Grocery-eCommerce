import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import { ProductModel, ProductType } from '../product/product';

/**
 * Array of products
 */
export const ProductsListModel = types
	.model('ProductsList')
	.props({
		products: types.optional(types.array(ProductModel), [])
	})
	.views((self) => ({}))
	.actions((self) => ({
		getProductById: (productId: string): ProductType => {
			return self.products.find(
				(product) => product.productId === productId
			);
		},
		addProductToList: (product: ProductType): void => {
			self.products.push(product);
		},
		removeProductFromList: (product: ProductType): void => {
			self.products.remove(product);
		}
	}));

type ProductsListType = Instance<typeof ProductsListModel>;
export interface ProductsList extends ProductsListType {}

type ProductsListSnapshotType = SnapshotOut<typeof ProductsListModel>;
export interface ProductsListSnapshot extends ProductsListSnapshotType {}
export const createProductsListDefaultModel = () =>
	types.optional(ProductsListModel, {});

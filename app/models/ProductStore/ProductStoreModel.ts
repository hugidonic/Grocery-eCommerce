import { Instance, SnapshotOut, types, flow } from 'mobx-state-tree';
import { dataJSON, DataType } from '../../../../utils/data';
import { delay } from '../../../../utils/delay';
import { ProductModel, ProductType } from '../Product/ProductModel';

/**
 * Array of products
 */
export const ProductsStoreModel = types
	.model('ProductsStore')
	.props({
		isLoading: true,
		// allProducts: types.map(ProductModel)
		allProducts: types.optional(types.array(ProductModel), []),
		// fruits: types.optional(types.array(ProductModel), []),
		// vegetables: types.optional(types.array(ProductModel), [])
	})
	.views((self) => ({
		get IsLoading(): boolean {
			return self.isLoading;
		},
		// getProductById: (productId: string): ProductType => {
		// 	return self.allProducts.find((product) => product.productId === productId);
		// }
	}))
	.actions((self) => {
		/**
     * Changes the `isLoading` property
     * @param loading - boolean type of loading
     */
		const setLoading = (loading: boolean): void => {
			self.isLoading = loading;
		};
		/**
     * Make fetch api to the server 
     * and filter products by their `type`
     */
		const loadProductsFromApi: () => Promise<void> = flow(function* loadProductsFromApi() {
			setLoading(true);
			try {
				const data: DataType = yield delay(100).then(() => (JSON.parse(dataJSON)))
				console.log('data', data)

				data.products.all.forEach((product: ProductType) => {
					self.allProducts.push(product)
				})

				console.log(self.allProducts);
				setLoading(false);
				
			} catch (error) {
				console.error('Failed to fetch');
				setLoading(false);
			} 	
		});

		return {
			setLoading,
			loadProductsFromApi
		};
	});

type ProductsStoreType = Instance<typeof ProductsStoreModel>;
export interface ProductsStore extends ProductsStoreType {}

type ProductsStoreSnapshotType = SnapshotOut<typeof ProductsStoreModel>;
export interface ProductsStoreSnapshot extends ProductsStoreSnapshotType {}
export const createProductsStoreDefaultModel = () =>
	types.optional(ProductsStoreModel, {});

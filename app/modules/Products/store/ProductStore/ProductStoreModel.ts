import { flow, Instance, SnapshotOut, types } from 'mobx-state-tree';
import { data } from '../../../../utils/data';
import { delay } from '../../../../utils/delay';
import { ProductModel, ProductType } from '../Product/ProductModel';

/**
 * Array of products
 */
export const ProductsStoreModel = types
	.model('ProductsStore')
	.props({
		isLoading: false,
		allProducts: types.optional(types.array(ProductModel), []),
		fruits: types.optional(types.array(ProductModel), []),
		vegetables: types.optional(types.array(ProductModel), [])
	})
	.views((self) => ({
		getProductById: (productId: string): ProductType => {
			return self.allProducts.find((product) => product.productId === productId);
		}
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
		const loadProductsFromApi: () => Promise<void> = flow(function*() {
			setLoading(true);
			try {
				yield delay(1000);
				data.products.all.forEach((prod) => {
          self.allProducts.push(prod)
          switch (prod.type) {
            case 'fruit':
              self.fruits.push(prod)
              break;
            case 'vegetable':
              self.vegetables.push(prod)
              break;
            default:
              break;
          }
        });
			} catch (error) {
				console.error('Failed to fetch');
			} finally {
        setLoading(false);
      }
		});

		return {
			setLoading,
			loadProductsFromApi,
		};
	});

type ProductsStoreType = Instance<typeof ProductsStoreModel>;
export interface ProductsStore extends ProductsStoreType {}

type ProductsStoreSnapshotType = SnapshotOut<typeof ProductsStoreModel>;
export interface ProductsStoreSnapshot extends ProductsStoreSnapshotType {}
export const createProductsStoreDefaultModel = () =>
	types.optional(ProductsStoreModel, {});

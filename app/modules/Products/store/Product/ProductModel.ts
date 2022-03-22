import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import { data } from '../../../../utils/data';

/**
 * Product Model
 */
export const ProductModel = types
	.model('Product')
	.props({
		productId: types.identifier,
		type: types.enumeration<'fruit' | 'vegetable'>('Type', [ 'fruit', 'vegetable' ]),
		name: types.optional(types.string, ''),
		description: types.optional(types.string, ''),
		price: types.optional(types.number, 0),
		pictureUri: types.optional(types.number, 1)
	})
	.views((self) => ({}))
	.actions((self) => ({}));

export type ProductType = Instance<typeof ProductModel>;
export interface IProduct extends ProductType {}

type ProductSnapshotType = SnapshotOut<typeof ProductModel>;
export interface ProductSnapshot extends ProductSnapshotType {}

export const createProductDefaultModel = () =>
	types.optional(ProductModel, data.products.fruits[0]);

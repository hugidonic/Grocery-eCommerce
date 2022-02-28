import { Instance, SnapshotOut, types } from 'mobx-state-tree';

/**
 * A Simple Product Model
 */
export const ProductModel = types
	.model('Product')
	.props({
    productId: types.identifier,

    name: types.string,
    description: types.optional(types.string, ""),
    price: types.optional(types.number, 0),
    // pictureUri: types.maybe(types.late(() => types.string)),
    pictureUri: types.maybe(types.string),
    
  })
	.views((self) => ({}))
	.actions((self) => ({
    
  }));



export type ProductType = Instance<typeof ProductModel>;
// export interface IProduct extends ProductType {}

type ProductSnapshotType = SnapshotOut<typeof ProductModel>;
export interface ProductSnapshot extends ProductSnapshotType {}

export const createProductDefaultModel = () => types.optional(ProductModel, {});

import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import {
	UserModel,
	CartStoreModel,
	FavoriteStoreModel,
	ProductsStoreModel
} from '../../modules';

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types
  .model("RootStore")
  .props({
    User: types.maybe(UserModel),
    CartStore: types.maybe(CartStoreModel),
    FavoriteStore: types.maybe(FavoriteStoreModel),
    ProductsStore: types.maybe(ProductsStoreModel)
  })

/**
 * The RootStore instance.
 */
export type RootStore = Instance<typeof RootStoreModel>;

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}

import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import { CartStoreModel } from '../../models/CartStore/CartStoreModel';
import { FavoriteStoreModel } from '../../models/FavoriteStore/FavoriteStoreModel';
import { ProductsStoreModel } from '../../models/ProductStore/ProductStoreModel';
// Models
import { UserModel } from '../../models/store/UserModel/UserModel';
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
export type RootStoreType = Instance<typeof RootStoreModel>;

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}

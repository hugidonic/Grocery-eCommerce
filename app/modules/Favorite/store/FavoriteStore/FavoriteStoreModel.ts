import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { ProductModel, ProductType } from "../../../Products/store/Product/ProductModel";

/**
 * Model description here for TypeScript hints.
 */
export const FavoriteStoreModel = types
  .model("FavoriteStore")
  .props({
    items: types.optional(types.array(ProductModel), [])
  })
  .views((self) => ({}))
  .actions((self) => ({
    addProductToFavorite: (product: ProductType) => {
      self.items.unshift(product)
    },
    removeProductFromFavorite: (product: ProductType) => {
      self.items.remove(product)
    }
  }))

export type FavoriteStoreType = Instance<typeof FavoriteStoreModel>

type FavoriteStoreSnapshotType = SnapshotOut<typeof FavoriteStoreModel>
export interface FavoriteStoreSnapshot extends FavoriteStoreSnapshotType {}
export const createFavoriteStoreDefaultModel = () => types.optional(FavoriteStoreModel, {})

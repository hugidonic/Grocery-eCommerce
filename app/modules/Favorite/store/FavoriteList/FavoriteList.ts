import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { ProductModel, ProductType } from "../../../Products/store/Product/Product";

/**
 * Model description here for TypeScript hints.
 */
export const FavoriteListModel = types
  .model("FavoriteList")
  .props({
    items: types.optional(types.array(ProductModel), [])
  })
  .views((self) => ({}))
  .actions((self) => ({
    addToFavorite: (product: ProductType) => {
      self.items.unshift(product)
    },
    removeFromFavorite: (product: ProductType) => {
      self.items.remove(product)
    }
  }))

export type FavoriteListType = Instance<typeof FavoriteListModel>

type FavoriteListSnapshotType = SnapshotOut<typeof FavoriteListModel>
export interface FavoriteListSnapshot extends FavoriteListSnapshotType {}
export const createFavoriteListDefaultModel = () => types.optional(FavoriteListModel, {})

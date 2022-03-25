import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { ProductModel } from "../../../Products/store/Product/ProductModel"

/**
 * Cart item model which is used in user model
 */
export const CartItemModel = types
  .model("CartItem")
  .props({
    id: types.identifier,
    product: types.reference(ProductModel),
    count: types.optional(types.number, 1)
  })
  .views((self) => ({}))
  .actions((self) => ({
    
  }))

export type CartItemType = Instance<typeof CartItemModel>
// export interface CartItem extends CartItemType {}
type CartItemSnapshotType = SnapshotOut<typeof CartItemModel>
export interface CartItemSnapshot extends CartItemSnapshotType {}
export const createCartItemDefaultModel = () => types.optional(CartItemModel, {})

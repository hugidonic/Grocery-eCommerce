import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { CartItemModel } from "../CartItem/CartItem";
import { ProductType } from "../product/product";

/**
 * Model description here for TypeScript hints.
 */
export const CartListModel = types
  .model("CartList")
  .props({
    items: types.optional(types.array(CartItemModel), [])
  })
  .views((self) => ({
    get totalCost(): number {
      return +self.items.reduce((totalCost, entry) => totalCost + entry.product.price, 0).toFixed(2)
    } 
  }))
  .actions((self) => ({
    addToCart: (product: ProductType) => {
      self.items.unshift({product, count: 1});
    },
    removeFromCart: (product: ProductType) => {
      self.items.remove({product, count: 1});
    },
  }))

export type CartListType = Instance<typeof CartListModel>

type CartListSnapshotType = SnapshotOut<typeof CartListModel>
export interface CartListSnapshot extends CartListSnapshotType {}
export const createCartListDefaultModel = () => types.optional(CartListModel, {})

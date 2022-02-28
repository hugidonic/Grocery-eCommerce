import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * User model
 */
export const UserModel = types
  .model("User")
  .props({
    userId: types.identifier,

    email: types.maybe(types.string),
    nickname: types.maybe(types.string),
    cartItems: types.maybe(types.array(types.identifier)),
    favoriteItems: types.maybe(types.array(types.identifier)),
  })
  .views((self) => ({
    get CartItemsCount() {
      return self.cartItems.length
    }
  }))
  .actions((self) => ({
    addToCart: (productId: string) => {
      self.cartItems.push(productId);
    },
    removeFromCart: (productId: string) => {
      self.cartItems.remove(productId);
    },
  })) 

type UserType = Instance<typeof UserModel>
export interface User extends UserType {}
type UserSnapshotType = SnapshotOut<typeof UserModel>
export interface UserSnapshot extends UserSnapshotType {}
export const createUserDefaultModel = () => types.optional(UserModel, {})

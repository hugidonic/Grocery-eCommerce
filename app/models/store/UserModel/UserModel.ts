import { Instance, SnapshotOut, types } from "mobx-state-tree"
// Utils
import uuid from "../../../utils/uuid";
import { withEnvironment } from "../../../RootStore/extensions/with-environment";

/**
 * User model
 */
export const UserModel = types
  .model("User")
  .props({
    userId: types.optional(types.identifier, uuid()),
    email: types.optional(types.string, "Aminev"),
    nickname: types.optional(types.string, "Vadim"),
  })
  .extend(withEnvironment)
  .views((self) => ({
  }))
  .actions((self) => ({

  })) 

export type UserType = Instance<typeof UserModel>
// export interface User extends UserType {}
type UserSnapshotType = SnapshotOut<typeof UserModel>
export interface UserSnapshot extends UserSnapshotType {}
export const createUserDefaultModel = () => types.optional(UserModel, {})
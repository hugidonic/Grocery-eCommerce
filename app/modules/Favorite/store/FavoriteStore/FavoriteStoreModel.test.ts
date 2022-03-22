import { FavoriteStoreModel } from "./FavoriteStoreModel"

test("can be created", () => {
  const instance = FavoriteStoreModel.create({})

  expect(instance).toBeTruthy()
})

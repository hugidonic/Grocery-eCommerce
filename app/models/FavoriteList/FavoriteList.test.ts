import { FavoriteListModel } from "./favorite-list"

test("can be created", () => {
  const instance = FavoriteListModel.create({})

  expect(instance).toBeTruthy()
})

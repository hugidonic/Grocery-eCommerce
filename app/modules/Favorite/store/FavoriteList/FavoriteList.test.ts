import { FavoriteListModel } from "./FavoriteList"

test("can be created", () => {
  const instance = FavoriteListModel.create({})

  expect(instance).toBeTruthy()
})

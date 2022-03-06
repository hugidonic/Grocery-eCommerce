import { CartListModel } from "./cart-list"

test("can be created", () => {
  const instance = CartListModel.create({})

  expect(instance).toBeTruthy()
})

import { CartItemModel } from "./CartItemModel"

test("can be created", () => {
  const instance = CartItemModel.create({})

  expect(instance).toBeTruthy()
})

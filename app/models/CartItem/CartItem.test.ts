import { CartItemModel } from "./cart-item"

test("can be created", () => {
  const instance = CartItemModel.create({})

  expect(instance).toBeTruthy()
})

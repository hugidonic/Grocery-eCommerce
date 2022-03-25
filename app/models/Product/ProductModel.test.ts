import { ProductModel } from "./ProductModel"

test("can be created", () => {
  const instance = ProductModel.create({})

  expect(instance).toBeTruthy()
})

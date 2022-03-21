import { ProductsListModel } from "./ProductList"

test("can be created", () => {
  const instance = ProductsListModel.create({})

  expect(instance).toBeTruthy()
})

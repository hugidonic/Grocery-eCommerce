import { ProductsListModel } from "./products-list"

test("can be created", () => {
  const instance = ProductsListModel.create({})

  expect(instance).toBeTruthy()
})

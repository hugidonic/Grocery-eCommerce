import { ProductsStoreModel } from './ProductStoreModel';

test("can be created", () => {
  const instance = ProductsStoreModel.create({})

  expect(instance).toBeTruthy()
})

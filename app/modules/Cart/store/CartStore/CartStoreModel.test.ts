import { CartStoreModel } from './CartStoreModel';

test("can be created", () => {
  const instance = CartStoreModel.create({})

  expect(instance).toBeTruthy()
})

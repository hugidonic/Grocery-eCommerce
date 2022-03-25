import {RootStoreModel} from './root-store'

it('should be createad', () => {
  const store = RootStoreModel.create()

  expect(store).toBeTruthy()
})

it('has all properties', () => {
  const store = RootStoreModel.create()
  expect(store).toHaveProperty('User')
  expect(store).toHaveProperty('CartStore')
  expect(store).toHaveProperty('FavoriteStore')
  expect(store).toHaveProperty('ProductsStore')
})
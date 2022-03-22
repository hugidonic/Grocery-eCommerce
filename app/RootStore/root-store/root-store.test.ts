import {RootStoreModel} from './root-store'

it('should be createad', () => {
  const store = RootStoreModel.create({
    UserStore: {
      userId: 'id'
    }
  })
  console.log('store', store)

  expect(store).toBeInstanceOf(RootStoreModel)

})
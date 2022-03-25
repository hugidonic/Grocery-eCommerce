import { FavoriteStoreModel } from ".."

it("can be created", () => {
  const favoriteStore = FavoriteStoreModel.create({
    items: []
  })
  console.log('favoriteStore', favoriteStore)

  expect(favoriteStore).toHaveProperty('items')
})

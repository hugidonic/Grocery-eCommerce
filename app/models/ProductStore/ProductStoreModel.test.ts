import { when } from "mobx"
import { ProductsStoreModel } from './ProductStoreModel';

describe('ProductStoreModel', () => {
  const productStore = ProductsStoreModel.create({})
  productStore.loadProductsFromApi()
  
  it("can be created", () => {
    expect(productStore).toBeTruthy()
  })
  
  it("gets products from data", (done) => {
    when(
      () => productStore.IsLoading === false,
      () => {
        expect(productStore.allProducts.length).toBe(10)
        done()
      }
    )
  })
  
})
import { combineReducers } from "redux";
import cartReducer from "../modules/Cart/cart.reducer";
import categoriesReducer from "../modules/Categories/categories.reducer";
import productsReducer from "../modules/Products/products.reducer";

export const rootReducer = combineReducers({
  ProductStore: productsReducer,
  CategoriesStore: categoriesReducer,
  CartStore: cartReducer,
})
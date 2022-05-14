import { combineReducers } from "redux";
import cartReducer from "../modules/Cart/cart.reducer";
import categoriesReducer from "../modules/Categories/categories.reducer";
import favoriteReducer from "../modules/Favorite/favorite.reducer";
import productsReducer from "../modules/Products/products.reducer";

export const rootReducer = combineReducers({
  ProductStore: productsReducer,
  CategoriesStore: categoriesReducer,
  FavoriteStore: favoriteReducer,
  CartStore: cartReducer,
})
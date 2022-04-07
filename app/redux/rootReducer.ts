import { combineReducers } from "redux";
import productsReducer from "../modules/Products/products.reducer";

export const rootReducer = combineReducers({
  ProductStore: productsReducer
})
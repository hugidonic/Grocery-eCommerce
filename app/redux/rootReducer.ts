import { combineReducers } from "redux";
import cartReducer from "../modules/Cart/cart.reducer";
import categoriesReducer from "../modules/Categories/categories.reducer";
import favoriteReducer from "../modules/Favorite/favorite.reducer";
import productsReducer from "../modules/Products/products.reducer";
import deliveryReducer from "../modules/Delivery/delivery.reducer";
import orderReducer from "../modules/Orders/order.reducer";
import paymentReducer from "../modules/Payment/payment.reducer";

export const rootReducer = combineReducers({
  ProductStore: productsReducer,
  CategoriesStore: categoriesReducer,
  FavoriteStore: favoriteReducer,
  CartStore: cartReducer,
  DeliveryStore: deliveryReducer,
  OrderStore: orderReducer,
  PaymentStore: paymentReducer
})
import { BaseInitialState } from "../../redux/store";
import { ProductType } from "../Products/products.types";

export enum CartTypes {
  LOAD_CART_ITEMS = "LOAD_CART_ITEMS",
  SET_CART_ITEMS = "SET_CART_ITEMS",
  SET_ERROR = "SET_ERROR"
}


interface LoadCartItemsAction {
  type: CartTypes.LOAD_CART_ITEMS
}
interface SetCartItemsAction {
  type: CartTypes.SET_CART_ITEMS,
  payload: CartItemType[],
}
interface CartItemsErrorAction {
  type: CartTypes.SET_ERROR
  payload: string,
}

export type CartActions = LoadCartItemsAction | SetCartItemsAction | CartItemsErrorAction

export interface CartState extends BaseInitialState  {
  cartItems: CartItemType[]
}

export type CartItemType = {
  id: string;
  product: ProductType;
  count: number
}
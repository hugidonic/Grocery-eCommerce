import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../Products/store/ProductSlice";

type CartItemType = {
  id: string,
  product: ProductType,
  count: number
}

const initialState: CartItemType = {
  id: '',
  product: null,
  count: 1
}

const CartItemSlice = createSlice({
  name: 'CartItem',
  initialState,
  reducers: {}
})

export {
  CartItemType,
  CartItemSlice,
}
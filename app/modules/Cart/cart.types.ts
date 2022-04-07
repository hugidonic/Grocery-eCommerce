import { ProductType } from "../Products/products.types";

export type CartItemType = {
  id: string;
  product: ProductType;
  count: number
}
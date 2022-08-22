import { CartItemType } from "../Cart"

export type OrderItemType = {
	num: string
	date: string
	price: number,
	type: 'FINISHED' | "ACTIVE",
	cartItems: CartItemType[]
}
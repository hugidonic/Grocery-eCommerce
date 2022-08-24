import { CartItemType } from "../Cart"

export type OrderItemType = {
	id: string
	date: string
	price: number,
	type: 'FINISHED' | "ACTIVE",
	cartItems: CartItemType[]
}
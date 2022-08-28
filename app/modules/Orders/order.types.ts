import { CartItemType } from "../Cart"

export type OrderStateType = {
	isLoading: boolean;
	orderItems: OrderItemType[]
};

export type OrderItemType = {
	id: string
	date: string
	price: number,
	type: 'FINISHED' | "ACTIVE",
	cartItems: CartItemType[]
}
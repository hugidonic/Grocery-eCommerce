import { OrderItemType } from './order.types';

export enum OrderTypes {
	LOAD_ORDERS = 'LOAD_ORDERS',
	SET_ORDERS = 'SET_ORDERS',
	ERROR_ORDERS = 'ERROR_ORDERS',
	UPDATE_ORDERS = 'UPDATE_ORDERS',

	CREATE_ORDER = 'CREATE_ORDER',
	FINISH_ORDER = 'FINISH_ORDER'
}

interface LoadOrdersAction {
	type: OrderTypes.LOAD_ORDERS;
}
interface SetOrdersAction {
	type: OrderTypes.SET_ORDERS;
	payload: OrderItemType[]
}
interface UpdateOrdersAction {
	type: OrderTypes.UPDATE_ORDERS;
	payload: OrderItemType[];
}
interface ErrorOrdersAction {
	type: OrderTypes.ERROR_ORDERS;
	payload: string;
}
interface CreateOrderAction {
	type: OrderTypes.CREATE_ORDER;
	payload: OrderItemType;
}
interface FinishOrderAction {
	type: OrderTypes.FINISH_ORDER;
	payload: OrderItemType['id'];
}

export type OrderActions =
	| FinishOrderAction
	| UpdateOrdersAction
	| CreateOrderAction
	| LoadOrdersAction
	| SetOrdersAction
	| ErrorOrdersAction

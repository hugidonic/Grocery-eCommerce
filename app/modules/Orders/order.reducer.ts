import { OrderActions, OrderTypes } from './order.actionTypes';
import { OrderItemType, OrderStateType } from './order.types';

const initialState: OrderStateType = {
	isLoading: false,
	orderItems: null
};

export default (state = initialState, action: OrderActions): OrderStateType => {
	switch (action.type) {

		case OrderTypes.LOAD_ORDERS: 
			return {
				...state,
				isLoading: true,
			}
		
		case OrderTypes.SET_ORDERS:
			return {
				...state,
				isLoading: false,
				orderItems: action.payload,
			}
		
		case OrderTypes.CREATE_ORDER:
			return {
				...state,
				orderItems: [...state.orderItems, action.payload]
			};

		case OrderTypes.FINISH_ORDER:
			// got id from action payload then find the index of the order in list
			const orderToFinishIdx = state.orderItems.findIndex(order => order.id === action.payload);
			// change type property
			const finishedOrder: OrderItemType = {
				...state.orderItems[orderToFinishIdx],
				type: 'FINISHED',
			}
			return {
				...state,
				orderItems: [...state.orderItems.slice(orderToFinishIdx), finishedOrder, ...state.orderItems.slice(orderToFinishIdx + 1)]
			}
			

		default:
			return {
				...state
			};
	}
};

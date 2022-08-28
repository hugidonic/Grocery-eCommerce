// Redux
import { Dispatch } from 'redux';
// Action types
import { OrderActions, OrderTypes } from './order.actionTypes';
// Types
import { OrderItemType, OrderStateType } from './order.types';
// Async Storage
import { load, save, STORAGE_KEYS } from '../../utils/storage';
import { orders } from '../../utils/data';

export const loadOrderListFromAsyncStorage = () => async (dispatch: Dispatch<OrderActions>) => {
  dispatch({
    type: OrderTypes.LOAD_ORDERS,
  })
  try {
    const ordersFromStorage: OrderItemType[] = await load(STORAGE_KEYS.ORDER_ITEMS) ?? orders;
    dispatch({
      type: OrderTypes.SET_ORDERS,
      payload: ordersFromStorage
    })
  } catch (error) {
    dispatch({
      type: OrderTypes.ERROR_ORDERS,
      payload: error.message,
    })    
  }
};

export const updateOrderListInStorage = () => async (dispatch: Dispatch<OrderActions>, getState: () => OrderStateType) => {
  const newOrderItems = getState().orderItems
  await save<OrderItemType[]>('ORDER_ITEMS', newOrderItems)
}

export const createOrderAction = (order: OrderItemType) => (dispatch: Dispatch<OrderActions>) => {
	dispatch({
		type: OrderTypes.CREATE_ORDER,
		payload: order
	});
};

export const finishOrderAction = (orderToFinishId: OrderItemType['id']) => (
	dispatch: Dispatch<OrderActions>
) => {
	dispatch({ type: OrderTypes.FINISH_ORDER, payload: orderToFinishId });
};

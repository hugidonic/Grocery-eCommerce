import { RootStateType } from "../../redux/store";

export const getOrderItems = (state: RootStateType) => state.OrderStore.orderItems
export const getActiveOrders = (state: RootStateType) => state.OrderStore.orderItems.filter(order => order.type === "ACTIVE")
export const getFinishedOrders = (state: RootStateType) => state.OrderStore.orderItems.filter(order => order.type === "FINISHED")
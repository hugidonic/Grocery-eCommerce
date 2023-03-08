import { RootStateType } from "../../redux/store";


export const getPaymentItems = (state: RootStateType) => state.PaymentStore.paymentMethodsItems
export const getPickedPaymentMethodIdx = (state: RootStateType) => state.PaymentStore.pickedPaymentIdx
export const getPickedPaymentMethod = (state: RootStateType) => state.PaymentStore.paymentMethodsItems[state.PaymentStore.pickedPaymentIdx]
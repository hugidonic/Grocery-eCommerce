import { UsersPaymentMethods } from "../../utils/data"
import { PaymentMethodsActions, PaymentMethodsTypes } from "./payment.actionTypes"
import { PaymentMethodsStateType } from "./payment.types"


const initialState: PaymentMethodsStateType = {
  isLoading: true,
  pickedPaymentIdx: null,
  paymentMethodsItems: UsersPaymentMethods,
}

export default (state = initialState, action: PaymentMethodsActions) => {
  switch (action.type) {
    case PaymentMethodsTypes.PICK_PAYMENT_METHOD:
      return {
        ...state,
        pickedPaymentIdx: state.paymentMethodsItems.findIndex(paymentMethod => paymentMethod.id === action.payload)
      }

    case PaymentMethodsTypes.CREATE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethodsItems: [...state.paymentMethodsItems, action.payload]
      }
    
    case PaymentMethodsTypes.DELETE_PAYMENT_METHOD:
      const methodToDeleteIdx = state.paymentMethodsItems.findIndex(paymentMethod => paymentMethod.id === action.payload)
      return {
        ...state,
        paymentMethodsItems: [...state.paymentMethodsItems.slice(methodToDeleteIdx), ...state.paymentMethodsItems.slice(methodToDeleteIdx + 1 )]
      }

    default:
      return state
    }
}

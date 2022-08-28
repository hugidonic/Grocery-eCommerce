import { Dispatch } from 'redux';
import { PaymentMethodsActions, PaymentMethodsTypes } from './payment.actionTypes';
import { PaymentMethodType } from './payment.types';

export const pickPaymentMethod = (payementMethodId: PaymentMethodType['id']) => (
	dispatch: Dispatch<PaymentMethodsActions>
) => {
	dispatch({
		type: PaymentMethodsTypes.PICK_PAYMENT_METHOD,
		payload: payementMethodId
	});
};

export const createPaymentMethod = (paymentMethod: PaymentMethodType) => (dispatch: Dispatch<PaymentMethodsActions>) => {
  dispatch({
    type: PaymentMethodsTypes.CREATE_PAYMENT_METHOD,
    payload: paymentMethod
  })
}


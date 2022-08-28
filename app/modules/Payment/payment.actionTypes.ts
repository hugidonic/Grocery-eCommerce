import { PaymentMethodType } from "./payment.types";

export enum PaymentMethodsTypes {
	CREATE_PAYMENT_METHOD = 'CREATE_PAYMENT_METHOD',
	DELETE_PAYMENT_METHOD = 'DELETE_PAYMENT_METHOD',
	EDIT_PAYMENT_METHOD = 'EDIT_PAYMENT_METHOD',
	PICK_PAYMENT_METHOD = 'PICK_PAYMENT_METHOD'
}
interface CreatePaymentMethodAction {
	type: PaymentMethodsTypes.CREATE_PAYMENT_METHOD;
	payload: PaymentMethodType;
}
interface EditPaymentMethodAction {
	type: PaymentMethodsTypes.EDIT_PAYMENT_METHOD;
	payload: PaymentMethodType;
}
interface DeletePaymentMethod {
	type: PaymentMethodsTypes.DELETE_PAYMENT_METHOD;
	payload: PaymentMethodType['id'];
}
interface PickPaymentMethodAction {
	type: PaymentMethodsTypes.PICK_PAYMENT_METHOD;
	payload: PaymentMethodType['id'];
}

export type PaymentMethodsActions =
	| CreatePaymentMethodAction
	| EditPaymentMethodAction
	| DeletePaymentMethod
	| PickPaymentMethodAction;

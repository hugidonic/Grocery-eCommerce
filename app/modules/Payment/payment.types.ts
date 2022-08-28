export type PaymentMethodsStateType = {
	isLoading: boolean;
	pickedPaymentIdx: number;
	paymentMethodsItems: PaymentMethodType[];
}

export type PaymentMethodType = {
	id: string;
	last4digits: string;
	color: string;
	cardName: 'MasterCard' | 'VISA' | 'MIR' | 'MAESTRO';
};
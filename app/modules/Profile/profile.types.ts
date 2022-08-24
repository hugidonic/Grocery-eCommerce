import { OrderItemType } from '../Orders';

/* TYPES */
export type ProfileType = {
	orders: OrderItemType[];
	details: UserDetailsType;
	deliveryAddresses: DeliveryAddressType[];
	paymentMethods: PaymentMethodType[];
	promoCards: PromoCardType[];
	notifications: NotificationType[];
};
export type UserDetailsType = {
	firstName: string;
	secondName: string;
	email: string;
};
export type DeliveryAddressType = {
	id: string;
	city: string;
	street: string;
	house: string;
	country: string;
};
export type PaymentMethodType = {
	last4digits: string;
	color: string;
	cardName: 'MasterCard' | 'VISA' | 'MIR' | 'MAESTRO';
};
export type PromoCardType = {
	id: string;
	beginDate: string;
	endDate: string;
	price: number;
};
export type NotificationType = {
	id: string;
	text: string;
	type: 'FIRE' | 'SALE' | 'QUESTION';
};


/* TYPES */
// export type ProfileType = {
// 	orders: OrderItemType[];
// 	details: UserDetailsType;
// 	deliveryAddresses: DeliveryAddressType[];
// 	paymentMethods: PaymentMethodType[];
// 	promoCards: PromoCardType[];
// 	notifications: NotificationType[];
// };

export type ProfileStateType = {
	UserDetails: UserDetailsType;
}
export type UserDetailsType = {
	firstName: string;
	secondName: string;
	email: string;
};

export type DeliveryAddressStateType = {
	isLoading: boolean;
	pickedAddressIdx: number;
	deliveryAddressItems: DeliveryAddressType[];
};

export type DeliveryAddressType = {
	id: string;
	city: string;
	street: string;
	house: string;
	country: string;
};

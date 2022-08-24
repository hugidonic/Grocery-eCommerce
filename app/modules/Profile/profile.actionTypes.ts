import { DeliveryAddressType, PromoCardType } from './profile.types';

// Delivery addresses
export enum DeliveryAddressTypes {
	PICK_ADDRESS = 'PICK_ADDRESS',
	CREATE_ADDRESS = 'CREATE_ADDRESS',
	DELETE_ADDRESS = 'DELETE_ADDRESS',
	EDIT_ADDRESS = 'EDIT_ADDRESS'
}
interface PickAddressAction {
	type: DeliveryAddressTypes.PICK_ADDRESS;
	payload: DeliveryAddressType['id'];
}
interface CreateAddressAction {
	type: DeliveryAddressTypes.CREATE_ADDRESS;
	payload: DeliveryAddressType;
}
interface EditAddressAction {
	type: DeliveryAddressTypes.EDIT_ADDRESS;
	payload: DeliveryAddressType;
}
interface DeleteAddressAction {
	type: DeliveryAddressTypes.DELETE_ADDRESS;
	payload: DeliveryAddressType['id'];
}
export type DeliveryAddressActions =
	| PickAddressAction
	| CreateAddressAction
	| EditAddressAction
	| DeleteAddressAction;

// PROMO
export enum PromoCardTypes {
	ADD_PROMO_CARD = 'ADD_PROMO_CARD',
	PICK_PROMO_CARD = 'PICK_PROMO_CARD'
}
interface AddPromoCardAction {
	type: PromoCardTypes.ADD_PROMO_CARD;
	payload: PromoCardType;
}
interface PickPromoCardAction {
	type: PromoCardTypes.ADD_PROMO_CARD;
	payload: PromoCardType['id'];
}
export type PromoCardActions = AddPromoCardAction | PickPromoCardAction;

// DETAILS
export enum DetailsTypes {
	SET_FIRST_NAME = 'SET_FIRST_NAME',
	SET_LAST_NAME = 'SET_LAST_NAME',
	SET_EMAIL = 'SET_EMAIL'
}
interface SetFirstNameAction {
	type: DetailsTypes.SET_FIRST_NAME;
	payload: string;
}
interface SetLastNameAction {
	type: DetailsTypes.SET_LAST_NAME;
	payload: string;
}
interface SetEmailAction {
	type: DetailsTypes.SET_EMAIL;
	payload: string;
}

export type DetailsActions = SetFirstNameAction | SetLastNameAction | SetEmailAction;

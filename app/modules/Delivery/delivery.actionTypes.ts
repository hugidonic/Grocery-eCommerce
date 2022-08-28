import { DeliveryAddressType } from "./delivery.types";

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

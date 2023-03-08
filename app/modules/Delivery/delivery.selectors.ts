import { RootStateType } from '../../redux/store';

export const getUsersDeliveryAddresses = (state: RootStateType) =>
	state.DeliveryStore.deliveryAddressItems;
export const getPickedDeliveryAddressIdx = (state: RootStateType) =>
	state.DeliveryStore.pickedAddressIdx;
export const getPickedDeliveryAddress = (state: RootStateType) =>
	state.DeliveryStore.deliveryAddressItems[state.DeliveryStore.pickedAddressIdx];

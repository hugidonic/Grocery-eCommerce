import { Dispatch } from 'redux';
import { DeliveryAddressActions, DeliveryAddressTypes } from './delivery.actionTypes';
import { DeliveryAddressType } from './delivery.types';

export const pickDeliveryAddress = (addressId: DeliveryAddressType['id']) => (
	dispatch: Dispatch<DeliveryAddressActions>
) => {
	dispatch({
		type: DeliveryAddressTypes.PICK_ADDRESS,
		payload: addressId
	});
};

export const createDeliveryAddress = (delvieryAddress: DeliveryAddressType) => (dispatch: Dispatch<DeliveryAddressActions>) => {
  dispatch({
    type: DeliveryAddressTypes.CREATE_ADDRESS,
    payload: delvieryAddress
  })
}


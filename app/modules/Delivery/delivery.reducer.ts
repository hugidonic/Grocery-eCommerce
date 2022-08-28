// Action Types
import { DeliveryAddressActions, DeliveryAddressTypes } from './delivery.actionTypes';
// Types
import { DeliveryAddressStateType } from './delivery.types';
// Dummy data
import { UsersDeliveryAddresses } from '../../utils/data';

const initialState: DeliveryAddressStateType = {
  isLoading: false,
	deliveryAddressItems: UsersDeliveryAddresses,
	pickedAddressIdx: null
};

export default (state = initialState, action: DeliveryAddressActions) => {
	switch (action.type) {
    case DeliveryAddressTypes.PICK_ADDRESS:
      return {
        ...state,
        pickedAddressIdx: state.deliveryAddressItems.findIndex(address => address.id === action.payload)
      }
    
		case DeliveryAddressTypes.CREATE_ADDRESS:
			return {
				...state,
				deliveryAddressItems: [ ...state.deliveryAddressItems, action.payload ]
			};

		case DeliveryAddressTypes.DELETE_ADDRESS:
			const addressToDeleteIdx = state.deliveryAddressItems.findIndex(
				(address) => address.id === action.payload
			);
			return {
				...state,
				deliveryAddressItems: [
					...state.deliveryAddressItems.slice(addressToDeleteIdx),
					...state.deliveryAddressItems.slice(addressToDeleteIdx + 1)
				]
			};

		default:
			return state;
	}
};

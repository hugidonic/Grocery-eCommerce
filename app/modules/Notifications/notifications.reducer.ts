import { UsersNotifications } from '../../utils/data';
import { NotificationActions, NotificationTypes } from './notifications.actionTypes';
import { NotifcationStateType } from './notifications.types';

const initialState: NotifcationStateType = {
	notificationItems: UsersNotifications
};

export default (state = initialState, action: NotificationActions) => {
	switch (action.type) {
		case NotificationTypes.CREATE_NOTIFICATION:
			return {
				...state,
        notificationItems: [action.payload, ...state.notificationItems]
			};

    case NotificationTypes.DELETE_NOTIFICATION:
      const newNotifications = state.notificationItems.filter(notify => notify.id !== action.payload)
      return {
        ...state,
        notificationItems: newNotifications,
      }
    case NotificationTypes.CLEAR_ALL_NOTIFICATIONS:
      return {
        ...state,
        notificationItems: []
      }

		default:
			return state;
	}
};

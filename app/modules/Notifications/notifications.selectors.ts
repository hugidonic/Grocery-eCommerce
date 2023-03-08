import { RootStateType } from '../../redux/store';

export const getUsersNotifications = (state: RootStateType) =>
	state.NotificationStore.notificationItems;

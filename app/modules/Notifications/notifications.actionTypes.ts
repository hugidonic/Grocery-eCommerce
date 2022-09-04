import { NotificationType } from './notifications.types';

export enum NotificationTypes {
	CREATE_NOTIFICATION = 'CREATE_NOTIFICATION',
	DELETE_NOTIFICATION = 'DELETE_NOTIFICATION',
	CLEAR_ALL_NOTIFICATIONS = 'CLEAR_ALL_NOTIFICATIONS',
	NOTIFY_USER = 'NOTIFY_USER'
}

interface CreateNotificationAction {
	type: NotificationTypes.CREATE_NOTIFICATION;
	/**
	 * Notificaiton object
	 */
	payload: NotificationType;
}

interface DeleteNotificationAction {
	type: NotificationTypes.DELETE_NOTIFICATION;
	/**
	 * Id of the notification to delete
	 */
	payload: NotificationType['id'];
}
interface ClearAllNotificationsAction {
	type: NotificationTypes.CLEAR_ALL_NOTIFICATIONS;
}

// interface NotifyUserAction {
//   type : NotificationTypes.NOTIFY_USER,
//   payload: NotificationType
// }

export type NotificationActions = CreateNotificationAction | DeleteNotificationAction | ClearAllNotificationsAction;

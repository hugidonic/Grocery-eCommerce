export type NotifcationStateType = {
	notificationItems: NotificationType[];
};

export type NotificationType = {
	id: string;
	isRead: boolean;
	text: string;
	type: 'FIRE' | 'SALE' | 'QUESTION';
};

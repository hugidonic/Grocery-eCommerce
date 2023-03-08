// React and packages
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
// Theme
import { colors, spacing } from '../../theme';
// Components
import { Screen, Block, Header, Button } from '../../components';
import { NotificationItem } from '../../modules/Notifications';
// Types
import { ProfileNavigatorParamList } from '../../navigators';
// Selectors
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import { getUsersNotifications, NotificationType } from '../../modules/Notifications';
import { useActions } from '../../redux/hooks/useActions';

interface NotificationsScreenProps
	extends StackScreenProps<ProfileNavigatorParamList, 'notifications'> {}

export const NotificationsScreen = (props: NotificationsScreenProps) => {

	const { clearAllNotifications } = useActions();

	const UsersNotifications: NotificationType[] = useTypedSelector(getUsersNotifications);

	/**
	 * TODO:
	 *  ! MAKE DELETE ANIMATION
	 *  ? Make clear all notifcations with animations 
	 *  ? Add "Mute notifications" button in header menu
	 *  ? Change notifyTypes emojis into react-native-emoji 
	 */

	return (
		<React.Fragment>
			<Screen style={styles.container} preset="scroll">
				<Header title="Notifications" />

				{UsersNotifications.map((notify) => (
					<NotificationItem key={notify.id} notificationItem={notify} />
				))}
			</Screen>

			{/* Floting button to clear all notifications*/}
			<Block
				justify="center"
				align="center"
				style={{ position: 'absolute', bottom: 40, right: 0, left: 0 }}
			>
				<Button onPress={clearAllNotifications} preset="primary" text="Clear all" shadow />
			</Block>
		</React.Fragment>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.offWhite,
		paddingHorizontal: spacing[5],
		minHeight: '100%'
	},
});

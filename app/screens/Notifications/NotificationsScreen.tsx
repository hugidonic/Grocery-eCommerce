// React and packages
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Pressable, StyleSheet } from 'react-native';
// Theme
import { colors, spacing } from '../../theme';
// Components
import { Screen, Block, Text, Header, Button } from '../../components';
// Types
import { ProfileNavigatorParamList } from '../../navigators';
// Icons
import Entypo from 'react-native-vector-icons/Entypo';
// Selectors
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import { getUsersNotifications, NotificationType } from '../../modules/Notifications';
import { useActions } from '../../redux/hooks/useActions';

interface NotificationsScreenProps
	extends StackScreenProps<ProfileNavigatorParamList, 'notifications'> {}

export const NotificationsScreen = (props: NotificationsScreenProps) => {
	const notifyTypes = {
		FIRE: '🔥',
		QUESTION: '🤨',
		SALE: '🤑'
	};

	const {clearAllNotifications} = useActions()

	const UsersNotifications: NotificationType[] = useTypedSelector(getUsersNotifications)

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

				{UsersNotifications.map((notify, idx) => {
					return (
						<Block key={notify.id} shadow style={styles.card} marginVertical={10} row>
							{/* ICON */}
							<Block justify="center" align="center" style={{ width: '15%' }}>
								<Text size="title">{notifyTypes[notify.type]}</Text>
							</Block>
							{/* TEXT */}
							<Block flex>
								<Text numberOfLines={3}>{notify.text}</Text>
							</Block>
							{/* CHEVRON */}
							<Pressable
								style={{
									width: '15%',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<Entypo
									name="chevron-right"
									size={30}
									color={colors.palette.black}
								/>
							</Pressable>
						</Block>
					);
				})}
			</Screen>
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
	card: {
		backgroundColor: colors.palette.white,
		borderRadius: 14,
		paddingVertical: spacing[2],
		paddingHorizontal: spacing[1]
	}
});



// React and packages
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Pressable, StyleSheet } from 'react-native';
// Types and utils
// import { ParamList } from '../../navigators';
import { colors, spacing } from '../../theme';
// Components
import { Screen, Block, Text, Header, Button } from '../../components';
import { ProfileNavigatorParamList } from '../../navigators';
import uuid from '../../utils/uuid';
import Entypo from 'react-native-vector-icons/Entypo';

interface NotificationsScreenProps
	extends StackScreenProps<ProfileNavigatorParamList, 'notifications'> {}

export const NotificationsScreen = (props: NotificationsScreenProps) => {
	const notifyTypes = {
		FIRE: '🔥',
		QUESTION: '🤨',
		SALE: '🤑'
	};

	/**
	 * TODO:
	 *  * MAKE DELETE ANIMATION
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
				<Button preset="primary" text="Clear all" shadow />
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

const UsersNotifications = [
	{
		id: uuid(),
		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Morbi tempus iaculis urna id volutpat.`,
		type: 'FIRE'
	},
	{
		id: uuid(),
		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Morbi tempus iaculis urna id volutpat.`,
		type: 'SALE'
	},
	{
		id: uuid(),
		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Morbi tempus iaculis urna id volutpat.`,
		type: 'QUESTION'
	},
	{
		id: uuid(),
		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Morbi tempus iaculis urna id volutpat.`,
		type: 'SALE'
	},
	{
		id: uuid(),
		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Morbi tempus iaculis urna id volutpat.`,
		type: 'QUESTION'
	},
	{
		id: uuid(),
		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Morbi tempus iaculis urna id volutpat.`,
		type: 'FIRE'
	},
	{
		id: uuid(),
		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Morbi tempus iaculis urna id volutpat.`,
		type: 'SALE'
	},
	{
		id: uuid(),
		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Morbi tempus iaculis urna id volutpat.`,
		type: 'FIRE'
	}
];

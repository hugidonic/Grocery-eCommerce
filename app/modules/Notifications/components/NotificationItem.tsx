// React native and other packages
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
// Types
import { NotificationType } from '../notifications.types';
// Components
import { Block, Text } from '../../../components';
// Theme
import { colors, spacing } from '../../../theme';
// Icons
import Entypo from 'react-native-vector-icons/Entypo';

type Props = {
	notificationItem: NotificationType;
};

export const NotificationItem = ({notificationItem: notify}: Props) => {
  // TODO: find the correct place for this types
  const notifyTypes = {
		FIRE: '🔥',
		QUESTION: '🤨',
		SALE: '🤑'
	};

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
				<Entypo name="chevron-right" size={30} color={colors.palette.black} />
			</Pressable>
		</Block>
	);
};

const styles = StyleSheet.create({
  card: {
		backgroundColor: colors.palette.white,
		borderRadius: 14,
		paddingVertical: spacing[2],
		paddingHorizontal: spacing[1]
	}
});

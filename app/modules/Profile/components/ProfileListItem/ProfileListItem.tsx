// React and packages
import React from 'react';
import {
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { observer } from 'mobx-react-lite';
// Types and utils
import { colors, spacing } from '../../../../theme';
// Components
import { Block, Text } from '../../../../components';

type ProfileListItemProps = {
	title: string;
	iconType: 'SimpleLineIcons' | 'Ionicons';
	iconName:
		| 'ios-receipt-outline'
		| 'person-outline'
		| 'location-pin'
		| 'ios-card-outline'
		| 'md-gift-outline'
		| 'notifications-outline'
		| 'question'
		| 'exclamation';
	func: () => void;
};
const ICONSIZE = 26;

export const ProfileListItem = observer(function ProfileListItem(
	props: ProfileListItemProps
) {
	const { title, iconType, iconName, func } = props;
	return (
		<TouchableOpacity onPress={() => func()}>
			<Block row align="center" style={styles.container}>
				{iconType == 'Ionicons' ? (
					<Ionicons
						// @ts-ignore
						name={iconName}
						size={ICONSIZE}
						color={colors.palette.black}
						style={{ marginRight: 15 }}
					/>
				) : (
					<SimpleLineIcons
						// @ts-ignore
						name={iconName}
						size={ICONSIZE}
						color={colors.palette.black}
						style={{ marginRight: 15 }}
					/>
				)}
				<Text weight='bold' size='medium'>
					{title}
				</Text>
				<Ionicons
					name="chevron-forward"
					size={ICONSIZE}
					color={colors.palette.black}
					style={styles.icon}
				/>
			</Block>
		</TouchableOpacity>
	);
});

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: spacing[5],
		paddingVertical: spacing[3],
		borderBottomWidth: 1,
		borderBottomColor: colors.dim,
		position: 'relative'
	},
	icon: {
		position: 'absolute',
		top: 12,
		right: 20
	}
});

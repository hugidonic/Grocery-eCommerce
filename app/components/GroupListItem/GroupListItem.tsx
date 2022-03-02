// React and packages
import React from 'react';
import {
	StyleSheet,
	StyleProp,
	ViewStyle,
	Image,
	TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
// Types and utils
import { GroupType } from '../../models';
import { NavigatorScreenProps } from '../../navigators';
import { spacing } from '../../theme';
// Components
import { Text, Block } from '..';

export interface GroupListItemProps {
	group: GroupType;
	style?: StyleProp<ViewStyle>;
}

export const GroupListItem = observer(function GroupListItem(
	props: GroupListItemProps
) {
	const { style, group } = props;
	const styles = Object.assign({}, st, style);

	const nav = useNavigation<NavigatorScreenProps>();

	return (
		<Block
			shadow
			row
			bRadius={12}
			align="center"
			justify="center"
			style={styles.container}
			color={group.color}
			marginVertical={10}
		>
			<TouchableOpacity
				style={{ padding: spacing[2], }}
				onPress={() =>
					nav.navigate('group', {
						groupId: group.groupId
					})}
			>
				<Block row align="center">
					<Image
						// @ts-ignore
						source={group.picture}
						style={{
							width: 80,
							height: 80,
							resizeMode: 'contain'
						}}
					/>
					<Text bold large>
						{group.name}
					</Text>
				</Block>
			</TouchableOpacity>
		</Block>
	);
});

const st = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
});

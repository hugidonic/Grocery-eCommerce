// React and packages
import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import {
	Dimensions,
	Image,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
// Types and utils
import { NavigatorParamList } from '../../navigators';
import { colors, spacing } from '../../theme';
// Components
import { Block, Screen, SearchBar, Text } from '../../components';
import { data } from '../../utils/data';
import { GroupType } from '../../models';

const { width } = Dimensions.get('screen');

export type ExploreScreenProps = StackScreenProps<
	NavigatorParamList,
	'TabsStack'
>;

export const ExploreScreen: FC<
	ExploreScreenProps
> = observer(function ExploreScreen(props) {
	const renderGroup = (group: GroupType, idx: number) => (
		<TouchableOpacity
			key={group.groupId}
			style={{ marginBottom: 10 }}
			// onPress={() =>
			// 	props.navigation.navigate('group', {groupId: group.groupId})}
		>
			<Block
				style={styles.group}
				justify="center"
				align="center"
				color={group.color}
			>
				{/* @ts-ignore */}
				<Image source={group.picture} style={styles.image} />
				<Text bold large>
					{group.name}
				</Text>
			</Block>
		</TouchableOpacity>
	);

	return (
		<Screen style={styles.container} preset="scroll">
			<Block
				justify="center"
				align="center"
				style={{ marginVertical: 30 }}
			>
				<Text black title>
					Find Products
				</Text>
			</Block>

			<Block style={{ marginBottom: 15 }}>
				<SearchBar />
			</Block>

			<Block
				row
				style={{ width: '100%', flexWrap: 'wrap' }}
				justify={'space-between'}
			>
				{data.groups.map(renderGroup)}
			</Block>
		</Screen>
	);
});

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.offWhite,
		paddingHorizontal: spacing[5]
	},
	image: {
		resizeMode: 'contain',
		marginBottom: 20,
		width: 80,
		height: 80
	},
	group: {
		width: width * 0.5 - 30,
		height: 180,
		borderRadius: 14
	}
});

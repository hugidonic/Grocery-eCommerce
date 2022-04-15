// React and packages
import React, { FC } from 'react';

import { Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
// Types and utils
import { CategoryType } from '../../modules/Categories';
import { NavigatorParamList } from '../../navigators';
import { colors, spacing } from '../../theme';
import * as CategoriesSelectors from '../../modules/Categories/categories.selectors';
// Components
import { Block, Screen, SearchBar, Text } from '../../components';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';

const { width } = Dimensions.get('screen');

export type ExploreScreenProps = StackScreenProps<NavigatorParamList, 'TabsStack'>;

export const ExploreScreen: FC<ExploreScreenProps> = (props) => {
	const categories = useTypedSelector(CategoriesSelectors.categories);

	const renderCategory = (category: CategoryType, idx: number) => (
		<Block
			style={styles.category}
			bRadius={14}
			shadow
			color={category.color}
			key={category.categoryId}
		>
			<TouchableOpacity
				style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
				onPress={() =>
					props.navigation.navigate('category', {
						categoryId: category.categoryId
					})}
			>
				{/* @ts-ignore */}
				<Image source={{uri: category.picture}} style={styles.image} />
				<Text weight="bold" size="large">
					{category.name}
				</Text>
			</TouchableOpacity>
		</Block>
	);

	return (
		<Screen style={styles.container} preset="scroll">
			<Block justify="center" align="center" style={{ marginVertical: 30 }}>
				<Text weight="black" size="title">
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
				{categories.map(renderCategory)}
			</Block>
		</Screen>
	);
};

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
	category: {
		width: width * 0.5 - 32,
		height: 180,
		marginBottom: spacing[4]
	}
});

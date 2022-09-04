// React and packages
import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
// Theme
import { CategoryItemComponentProps } from './CategoryItem.props';
import { spacing } from '../../../../theme';
// Components
import { Block, Text } from '../../../../components';

export const CategoryItemComponent = (props: CategoryItemComponentProps) => {
	// TODO: change arrow func
	const {  category, navigateToCategory = () => {} } = props;

	return (
		// CONTAINER
		<Block
			shadow
			row
			bRadius={12}
			align="center"
			justify="center"
			style={styles.container}
			color={category.color}
			marginVertical={10}
		>
			{/* Pressable Content */}
			<TouchableOpacity style={{ padding: spacing[2] }} onPress={navigateToCategory}>
				<Block row align="center">
					{/*Category Image */}
					<Image
						// @ts-ignore
						source={category.picture}
						style={{
							width: 80,
							height: 80,
							resizeMode: 'contain'
						}}
					/>
					{/* Category Info */}
					<Text weight="bold" size="large">
						{category.name}
					</Text>
				</Block>
			</TouchableOpacity>
		</Block>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

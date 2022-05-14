// React and packages
import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
// Types and utils
import { CategoryItemContainerProps } from './CategoryItem.container';
import { spacing } from '../../../../theme';
// Components
import { Block, Text } from '../../../../components';

interface CategoryItemComponentProps extends CategoryItemContainerProps {
	navigateToCategory?: () => void
}

export const CategoryItemComponent = (props: CategoryItemComponentProps) => {
	const {  category, navigateToCategory = () => {} } = props;
	

	return (
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
			<TouchableOpacity style={{ padding: spacing[2] }} onPress={navigateToCategory}>
				<Block row align="center">
					<Image
						// @ts-ignore
						source={category.picture}
						style={{
							width: 80,
							height: 80,
							resizeMode: 'contain'
						}}
					/>
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

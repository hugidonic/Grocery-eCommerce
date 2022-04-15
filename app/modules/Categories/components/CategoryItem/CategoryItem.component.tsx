// React and packages
import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
// Types and utils
import { CategoryItemProps } from './CategoryItem.container';
import { spacing } from '../../../../theme';
// Components
import { Block, Text } from '../../../../components';

export const CategoryItemComponent = (props: CategoryItemProps) => {
	const { style = {}, category, onPress = () => {} } = props;
	const styles = Object.assign({}, st, style);

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
			<TouchableOpacity style={{ padding: spacing[2] }} onPress={onPress}>
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

const st = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

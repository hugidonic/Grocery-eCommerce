// React and packages
import React from 'react';
import {
	StyleSheet,
	StyleProp,
	ViewStyle,
	Image,
	TouchableOpacity
} from 'react-native';

// Types and utils
import { spacing } from '../../../../theme';
// Components
import { Block, Text } from '../../../../components';

export interface CategoriesListItemProps {
	category: CategoryType;
	style?: StyleProp<ViewStyle>;
	onPress?: () => void
}

export const CategoriesListItem = (
	props: CategoriesListItemProps
) => {
	const { style, category, onPress = () => {} } = props;
	const styles = Object.assign({}, st, style);

	// const nav = useNavigation<NavigatorScreenProps>();

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
			<TouchableOpacity
				style={{ padding: spacing[2], }}
				onPress={onPress}
					// nav.navigate('category', {
					// 	categoryId: category.categoryId
					// })}
			>
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
					<Text weight='bold' size="large">
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
		alignItems: 'center',
	}
});

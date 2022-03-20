// React and packages
import React from 'react';
import {
	StyleSheet,
	StyleProp,
	ViewStyle,
	Pressable,
	Image
} from 'react-native';
import { observer } from 'mobx-react-lite';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
// Types and utils
import { ProductType } from '../../../../models';
import { colors } from '../../../../theme';
// Components
import { Block, Text } from '../../../../components';

export interface FavoriteListItemProps {
	product: ProductType;
	style?: StyleProp<ViewStyle>;
}

export const FavoriteListItem = observer(function FavoriteListItem(
	props: FavoriteListItemProps
) {
	const { style, product } = props;
	const styles = Object.assign({}, st, style);

	return (
		<Block row color="#fff" shadow bRadius={20} style={styles.container}>
			<Image
				// @ts-ignore
				source={product.pictureUri}
				style={{
					width: 100,
					height: 100,
					resizeMode: 'contain',
					marginRight: 20
				}}
			/>
			<Block>
				<Block style={{ marginBottom: 8 }}>
					<Text weight='black' size="large">
						{product.name}
					</Text>
					<Text color={colors.dim}>{product.description}</Text>
				</Block>
			</Block>

			<Pressable style={styles.deleteIcon}>
				<Entypo name="cross" size={36} color="black" />
			</Pressable>
		</Block>
	);
});

const st = StyleSheet.create({
	container: {
		position: 'relative',
		padding: 15,
		marginHorizontal: 20
	},
	deleteIcon: {
		position: 'absolute',
		right: 20,
		top: 10
	}
});

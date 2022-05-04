// React and packages
import React from 'react';
import { StyleSheet, Pressable, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
// Types and utils
import { colors } from '../../../../theme';
import { FavoriteItemContainerProps } from './FavoriteItem.container';
// Components
import { Block, Text } from '../../../../components';

export interface FavoriteItemComponentProps extends FavoriteItemContainerProps {
	removeProductFromFavorite?: () => void;
}

export const FavoriteItemComponent = (props: FavoriteItemComponentProps) => {
	const { style, favoriteItem, removeProductFromFavorite = () => {} } = props;
	

	return (
		<Block row color="#fff" shadow bRadius={20} style={styles.container}>
			<Image
				//@ts-ignore
				source={favoriteItem.picture}
				style={{
					width: 100,
					height: 100,
					resizeMode: 'contain',
					marginRight: 20
				}}
			/>
			<Block>
				<Block style={{ marginBottom: 8 }}>
					<Text weight="black" size="large">
						{favoriteItem.name}
					</Text>
					<Text color={colors.dim}>{favoriteItem.description}</Text>
				</Block>
			</Block>

			<Pressable
				onPress={removeProductFromFavorite}
				style={styles.deleteIcon}
			>
				<Entypo name="cross" size={36} color="black" />
			</Pressable>
		</Block>
	);
};

const styles = StyleSheet.create({
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

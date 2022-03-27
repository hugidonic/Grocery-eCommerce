// React and packages
import React from 'react';
import { StyleSheet, StyleProp, ViewStyle, TouchableOpacity, Image } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
// Types and utils
import { colors } from '../../../../theme';
// Components
import { OperationBtn } from '..';
import { Block, Text } from './../../../../components';

export interface CartListItemProps {
	cartItem: any;
	style?: StyleProp<ViewStyle>;
}

export const CartListItem = (props: CartListItemProps) => {
	const { style, cartItem } = props;
	const styles = Object.assign({}, st, style);

	const [ count, setCount ] = React.useState<number>(cartItem.count);

	const decrement = () => {
		if (count > 1) setCount((count) => count - 1);
	};
	const increment = () => {
		setCount((count) => count + 1);
	};

	return (
		<Block color="#fff" row shadow bRadius={20} style={styles.container}>
			<Block flex={1}>
				<Image
					// @ts-ignore
					source={cartItem.product.pictureUri}
					style={{
						width: 100,
						height: 100,
						resizeMode: 'contain',
						marginRight: 20
					}}
				/>
			</Block>

			<Block flex={2}>
				<Block flex row justify="space-between">
					<Block style={{ marginBottom: 8 }}>
						<Text weight="black" size="large">
							{cartItem.product.name}
						</Text>
						<Text color={colors.dim}>{cartItem.product.description}</Text>
					</Block>
					<TouchableOpacity>
						<Entypo name="cross" size={36} color="black" />
					</TouchableOpacity>
				</Block>

				<Block row justify="space-between" align="center">
					<Block row>
						<OperationBtn func={decrement} type="Decrement" />
						<Block
							style={{ width: 40, height: 40 }}
							justify="center"
							align="center"
						>
							<Text weight="bold" size="large">
								{count}
							</Text>
						</Block>
						<OperationBtn func={increment} type="Increment" />
					</Block>
					<Text weight="black" size="large">
						{(cartItem.product.price * count).toFixed(2)}$
					</Text>
				</Block>
			</Block>
		</Block>
	);
};

const st = StyleSheet.create({
	container: {
		position: 'relative',
		padding: 15,
		marginHorizontal: 20
	}
});

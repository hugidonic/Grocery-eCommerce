// React and packages
import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
// Theme
import { colors } from '../../../../theme';
// Components
import { OperationBtn } from '..';
import { Block, Text } from '../../../../components';
import { CartItemComponentProps } from './CartItem.props';

export const CartItemComponent = (props: CartItemComponentProps) => {
	const { cartItem, removeProductFromCart = () => {}, updateCartItem = () => {} } = props;
	// Count state of the cart item
	const [ count, setCount ] = React.useState<number>(cartItem.count);
	// Methods to set count
	const decrement = () => {
		if (count > 1) setCount((count) => count - 1);
	};
	const increment = () => {
		setCount((count) => count + 1);
	};

	// Watch for every count state change and update the store
	React.useEffect(
		() => {
			updateCartItem({
				...cartItem,
				count
			});
		},
		[ count ]
	);

	return (
		// Cart item container
		<Block color="#fff" row shadow bRadius={20} style={styles.container}>
			{/* Product image */}
			<Block flex={1}>
				<Image
					source={{ uri: cartItem.product.pictureUri }}
					style={{
						width: 100,
						height: 100,
						resizeMode: 'contain',
						marginRight: 20
					}}
				/>
			</Block>

			{/* Content  */}
			<Block flex={2}>
				<Block flex row justify="space-between">
					{/* Cart item product info (title, description) */}
					<Block style={{ marginBottom: 8 }}>
						<Text weight="black" size="large">
							{cartItem.product.name}
						</Text>
						<Text color={colors.dim}>{cartItem.product.description}</Text>
					</Block>
					{/* Cross icon to remove cart item */}
					<TouchableOpacity onPress={removeProductFromCart}>
						<Entypo name="cross" size={36} color="black" />
					</TouchableOpacity>
				</Block>

				{/* Counter with buttons */}
				<Block row justify="space-between" align="center">
					<Block row align="center">
						<OperationBtn func={decrement} type="Decrement" />
						<Block style={{ width: 40, height: 40 }} justify="center" align="center">
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

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		padding: 15
	}
});

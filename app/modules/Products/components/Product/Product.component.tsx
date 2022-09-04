// React and packages
import React from 'react';
import { Dimensions, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Theme
import { colors, spacing } from '../../../../theme';
import { ProductComponentProps } from './Product.props';
// Components
import { Block, Text } from '../../../../components';

// CONSTANTS
const { width } = Dimensions.get('screen');
const IMAGE_SIZE = 120;

export const ProductComponent = (props: ProductComponentProps) => {
	const {
		product,
		isProductInCart = false,
		// TODO: turn arrow functions into one
		handleNavigation = () => {},
		addToCart = () => {},
		removeFromCart = () => {}
	} = props;

	return (
		// Card Container
		<Block
			shadow
			bRadius={20}
			style={{ maxWidth: width * 0.5, minWidth: width * 0.4 }}
			color="#fff"
			padding={[ 8, 8, 8, 8 ]}
			margin={[ 8, 8, 12, 8 ]}
		>	
		{/* Inner pressable container */}
			<TouchableOpacity onPress={handleNavigation} style={{ padding: spacing[2] }}>
				{/* Product image */}
				<Image
					// @ts-ignore
					source={product.picture}
					style={{
						resizeMode: 'contain',
						width: IMAGE_SIZE,
						height: IMAGE_SIZE
					}}
				/>

				{/* Product information */}
				<Block style={{ marginVertical: 8 }}>
					<Text weight="bold" size="medium">
						{product.name}
					</Text>
					<Text color="#999" weight="regular">
						{product.description}
					</Text>
				</Block>
				
				{/* Product price and Add to cart button */}
				<Block row align="center" justify="space-between">
					<Text weight="bold" size="medium">
						$ {product.price}
					</Text>

					<TouchableOpacity
						onPress={isProductInCart ? removeFromCart : addToCart}
						style={{
							backgroundColor: isProductInCart ? colors.primaryDarker : colors.primary,
							borderRadius: 18,
							padding: spacing[2]
						}}
					>
						<MaterialCommunityIcons
							name={isProductInCart ? 'cart-off' : 'cart'}
							size={28}
							color="#fff"
						/>
					</TouchableOpacity>
				</Block>
				
			</TouchableOpacity>
		</Block>
	);
};

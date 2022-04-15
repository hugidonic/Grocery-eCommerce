// React and packages
import React from 'react';
import { StyleProp, ViewStyle, Dimensions, TouchableOpacity, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
// Types and utils
import { colors, spacing } from '../../../../theme';
// Components
import { Block, Text } from '../../../../components';
import { ProductType } from '../../products.types';

export interface ProductProps {
	product: ProductType;
	style?: StyleProp<ViewStyle>;
}

const { width } = Dimensions.get('screen');
const IMAGE_SIZE = 120;

export const ProductComponent = (props: {
	handleNavigation?: () => void;
	product: ProductType;
}) => {
	const { handleNavigation = () => {}, product } = props;
	return (
		<Block
			shadow
			bRadius={20}
			style={{ maxWidth: width * 0.5, minWidth: width * 0.4 }}
			color="#fff"
			padding={[ 8, 8, 8, 8 ]}
			margin={[ 8, 8, 12, 8 ]}
		>
			<TouchableOpacity onPress={handleNavigation} style={{ padding: spacing[2] }}>
				<Image
					// @ts-ignore
					source={product.picture}
					style={{
						resizeMode: 'contain',
						width: IMAGE_SIZE,
						height: IMAGE_SIZE
					}}
				/>

				<Block style={{ marginVertical: 8 }}>
					<Text weight="bold" size="medium">
						{product.name}
					</Text>
					<Text color="#999" weight="regular">
						{product.description}
					</Text>
				</Block>

				<Block row align="center" justify="space-between">
					<Text weight="bold" size="medium">
						$ {product.price}
					</Text>
					<TouchableOpacity
						style={{
							backgroundColor: colors.primary,
							borderRadius: 18,
							padding: spacing[2]
						}}
					>
						<Feather name="plus" size={28} color="#fff" />
					</TouchableOpacity>
				</Block>
			</TouchableOpacity>
		</Block>
	);
};

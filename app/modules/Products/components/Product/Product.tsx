// React and packages
import React from 'react';
import { StyleProp, ViewStyle, Dimensions, TouchableOpacity, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
// Types and utils
import { colors, spacing } from '../../../../theme';
import { navigationRef, NavigatorScreenProps } from '../../../../navigators';
import { ProductType } from '../../store';
// Components
import { Block, Text } from '../../../../components';

export interface ProductProps {
	product: ProductType;
	style?: StyleProp<ViewStyle>;
}

const { width } = Dimensions.get('screen');
const IMAGE_SIZE = 120;

export const Product = observer((props: ProductProps) => {
	const { product } = props;

	const nav = useNavigation<NavigatorScreenProps>();
	
	const handleNavigation = () => {
		if (navigationRef.isReady()) {
			nav.navigate('productDetails', { productId: product.productId });
		}
	};

	return <ProductUI handleNavigation={handleNavigation} product={product} />;
});

export const ProductUI = (props: {
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
					source={product.pictureUri}
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

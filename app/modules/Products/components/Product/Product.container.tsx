import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleProp, ViewStyle } from 'react-native';
import { navigationRef, NavigatorScreenProps } from '../../../../navigators';
import { ProductType } from '../../products.types';
import { ProductComponent } from './Product.component';
import { useActions } from './../../../../redux/hooks/useActions';

export interface ProductContainerProps {
	product: ProductType;
	style?: StyleProp<ViewStyle>;
}

export const ProductContainer = (props: ProductContainerProps) => {
	const { addProductToCart } = useActions();

	const nav = useNavigation<NavigatorScreenProps>();

	const handleNavigation = () => {
		if (navigationRef.isReady()) {
			nav.navigate('productDetails', { product: props.product });
		}
	};

	return (
		<ProductComponent
			addToCart={() => addProductToCart(props.product)}
			handleNavigation={handleNavigation}
			{...props}
		/>
	);
};

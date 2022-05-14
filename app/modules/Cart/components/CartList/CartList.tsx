// React and packages
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
// Types and utils
import { spacing } from '../../../../theme';
import { CartItemType } from '../../cart.types';
// Components
import { Block } from '../../../../components';
import { CartItem } from '..';

export interface CartListProps {
	
	cartItems?: CartItemType[];
}

export const CartList = (props: CartListProps) => {
	const { cartItems = [] } = props;

	const renderCartItem = (cartItem: CartItemType, idx: number): JSX.Element => {
		return (
			<Block key={cartItem.product.productId} marginVertical={spacing[2]}>
				<CartItem cartItem={cartItem} />
			</Block>
		);
	};

	return (
		<Block padding={[ 0, 0, 200, 0 ]}>
			{cartItems && cartItems.map(renderCartItem)}
		</Block>
	);
}
// React and packages
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
// Types and utils
import { spacing } from '../../../../theme';
import { CartItemType } from '../../../../models/CartItem/CartItem';
// Components
import { Block } from '../../../../components';
import { CartListItem } from '..';

export interface CartListProps {
	style?: StyleProp<ViewStyle>;
	cartItems?: CartItemType[];
}

export const CartList = function CartList(props: CartListProps) {
	const { cartItems = []} = props;

	const renderCartListItem = (cartItem: CartItemType, idx: number) => {
		return (
			<Block key={cartItem.product.productId} marginVertical={spacing[2]}>
				<CartListItem cartItem={cartItem} />
			</Block>
		);
	};

	return (
		<Block padding={[ 0, 0, 200, 0 ]}>
			{cartItems.map(renderCartListItem)}
		</Block>
	);
}
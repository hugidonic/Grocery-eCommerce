// React and packages
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { observer } from 'mobx-react-lite';
// Types and utils
import { spacing } from '../../theme';
import { data } from '../../utils/data';
// Components
import { Block, CartListItem, CartListItemProps } from '..';

export interface CartListProps {
	style?: StyleProp<ViewStyle>;
}

export const CartList = observer(function CartList(props: CartListProps) {
	const renderCartListItem = (
		cartItem: CartListItemProps['cartItem'],
		idx: number
	) => (
		<Block key={cartItem.product.productId} marginVertical={spacing[2]}>
			<CartListItem cartItem={cartItem} />
		</Block>
	);

	return (
		<Block padding={[ 0, 0, 200, 0 ]}>
			{cartData.map(renderCartListItem)}
		</Block>
	);
});

// TODO: Remove that
const cartData: CartListItemProps['cartItem'][] = data.products.fruits.map(
	(f) => {
		return {
			product: f,
			count: 1
		};
	}
);

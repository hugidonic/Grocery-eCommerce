// React and packages
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { observer } from 'mobx-react-lite';
// Types and utils
import { spacing } from '../../theme';
import { data } from '../../utils/data';
import {CartItemType} from '../../models/CartItem/CartItem'
// Components
import { Block, CartListItem } from '..';
import { useStores } from '../../models';
import { Text } from './../Text/Text';

export interface CartListProps {
	style?: StyleProp<ViewStyle>;
}

export const CartList = observer(function CartList(props: CartListProps) {

	const {UserStore: {cartItems}} = useStores()

	const renderCartListItem = (
		cartItem: CartItemType,
		idx: number
		) => {
			return (
			<Block key={cartItem.product.productId} marginVertical={spacing[2]}>
				<CartListItem cartItem={cartItem} />
			</Block>
		)
	};

	return (
		<Block padding={[ 0, 0, 200, 0 ]}>
			{cartItems.items.map(renderCartListItem)}
			<Text large style={{textAlign: 'center'}} black>Total: {cartItems.totalCost}$</Text>
		</Block>
	);
});

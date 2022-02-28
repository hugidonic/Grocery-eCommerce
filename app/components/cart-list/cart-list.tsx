// React and packages
import React from 'react';
import { StyleProp, ViewStyle, FlatList } from 'react-native';
import { observer } from 'mobx-react-lite';
// Types and utils
// Components
import { Block } from '..';
import { data } from '../../utils/data';
import { CartListItem } from '../cart-list-item/cart-list-item';
import { CartListItemProps } from '..';
import { spacing } from '../../theme';

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
	// <FlatList
	//   data={cartData}
	//   renderItem={renderCartListItem}
	//   keyExtractor={(item) => item.product.name}
	//   scrollEnabled={false}
	//   showsVerticalScrollIndicator={false}
	//   ListHeaderComponent={() => <Block style={{ height: 20 }} />}
	//   ListFooterComponent={() => <Block style={{ height: 300 }} />}
	//   ItemSeparatorComponent={() => (
	//     <Block
	//       style={{
	//         marginVertical: 10
	//       }}
	//     />
	//   )}
	// />
});

const cartData: CartListItemProps['cartItem'][] = data.products.fruits.map(
	(f) => {
		return {
			product: f,
			count: 1
		};
	}
);

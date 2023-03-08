import React from 'react';
import { CartItemComponent } from './CartItem.component';
import { useActions } from '../../../../redux/hooks/useActions';
import { CartItemContainerProps } from './CartItem.props';

export const CartItemContainer = (props: CartItemContainerProps) => {
	const { removeProductFromCart, updateCartItem } = useActions();

	return (
		<CartItemComponent
			{...props}
			updateCartItem={updateCartItem}
			removeProductFromCart={() => removeProductFromCart(props.cartItem.cartItemId)}
		/>
	);
};

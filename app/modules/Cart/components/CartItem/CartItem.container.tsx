import React from 'react';
import { CartItemType } from '../../cart.types';
import { CartItemComponent } from './CartItem.component';
import { useActions } from '../../../../redux/hooks/useActions';

export interface CartItemContainerProps {
	cartItem: CartItemType;
}

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

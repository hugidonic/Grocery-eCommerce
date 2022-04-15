import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { CartItemType } from '../../cart.types';
import { CartListItemComponent } from './CartListItem.component';


export interface CartListItemProps {
	cartItem: CartItemType;
	style?: StyleProp<ViewStyle>;
}

export const CartListItemContainer = (props: CartListItemProps) => {
  return (
    <CartListItemComponent {...props} />
  )
}
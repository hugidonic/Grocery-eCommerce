import { createSelector } from 'reselect';
import { RootStateType } from '../../redux/store';

export const cartItems = (state: RootStateType) => state.CartStore.cartItems;

export const totalCost = createSelector(
  cartItems,
  (cartItems) => cartItems.reduce((acc, item) => {
    const { product: {price}, count } = item
    const newItemPrice = +(price * count).toFixed(2)
    return +(acc + newItemPrice).toFixed(2)
  }, 0)
)

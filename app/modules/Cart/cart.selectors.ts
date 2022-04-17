import { createSelector } from 'reselect';
import { RootStateType } from '../../redux/store';

export const cartItems = (state: RootStateType) => state.CartStore.cartItems;

export const totalCost = createSelector(
  cartItems,
  (cartItems) => cartItems.reduce((acc, item) => {
    const { product: {price}, count } = item
    return acc + +(price * count).toFixed(2)
  }, 0)
)

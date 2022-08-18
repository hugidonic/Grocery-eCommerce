import { CartItemType } from "../../cart.types";

export interface CartItemContainerProps {
	cartItem: CartItemType;
}

export interface CartItemComponentProps extends CartItemContainerProps {
  /**
   * Action that removes the item from the Cart list
   */
	removeProductFromCart?: () => void;
  /**
   * Action that executes when the cart item count is changed
   */
	updateCartItem?: (cartItem: CartItemType) => void;
}
import { ProductType } from "../../products.types";

export interface ProductContainerProps {
	product: ProductType;
}

export interface ProductComponentProps extends ProductContainerProps {
  /**
   * Checks if the product is already in cart
   */
	isProductInCart?: boolean;
  /**
   * Action that adds the product to the cart
   */
	addToCart?: () => void;
  /**
   * Action that removes the product from the cart
   */
	removeFromCart?: () => void;
	/**
	 * Function that navigates to the product screen
	 */
	handleNavigation?: () => void;
}
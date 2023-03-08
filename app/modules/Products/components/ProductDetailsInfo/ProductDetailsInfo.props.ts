import { ProductType } from "../../products.types";

export interface ProductDetailsInfoContainerProps {
	product: ProductType;
}

export interface ProductDetailsInfoComponentProps extends ProductDetailsInfoContainerProps {
  /**
   * Action to add product to favorite list
   */
	addToFavorite?: () => void;
  /**
   * Action to remove product from favorite list
   */
	removeFromFavorite?: () => void;
  /**
   * Check if product is already in favorites list
   */
	isFavorite: boolean;
  /**
   * Check if product is already in Cart list
   */
	isProductInCart: boolean;
  /**
   * Action to remove product from Cart list
   */
	removeFromCart: () => void;
  /**
   *  Action to add product to Cart list
   */
	addToCart: () => void;
}


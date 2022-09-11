import { ProductType } from "../../../Products";

export interface FavoriteItemContainerProps {
  favoriteItem: ProductType;
}
export interface FavoriteItemComponentProps extends FavoriteItemContainerProps {
  /**
   * Action that removes product from the favorites list
   */
	removeProductFromFavorite?: () => void;
}
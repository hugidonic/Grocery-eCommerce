import { FavoriteItemType } from "../..";

export interface FavoriteItemContainerProps {
  favoriteItem: FavoriteItemType;
}
export interface FavoriteItemComponentProps extends FavoriteItemContainerProps {
  /**
   * Action that removes product from the favorites list
   */
	removeProductFromFavorite?: () => void;
}
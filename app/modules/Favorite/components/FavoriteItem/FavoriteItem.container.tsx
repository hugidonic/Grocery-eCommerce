// React
import React from 'react'
// Types
import { FavoriteItemContainerProps } from './FavoriteItem.props';
// Components
import { FavoriteItemComponent } from './FavoriteItem.component'
// Redux
import { useActions } from './../../../../redux/hooks/useActions';

export const FavoriteItemContainer = (props: FavoriteItemContainerProps) => {
  const {removeProductFromFavorite} = useActions()
  
  return (
    <FavoriteItemComponent
      {...props}
      removeProductFromFavorite={() => removeProductFromFavorite(props.favoriteItem.productId)}
    />
  )
}
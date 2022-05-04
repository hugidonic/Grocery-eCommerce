// React
import React from 'react'
import { ViewStyle, StyleProp } from 'react-native';
// Types
import { FavoriteItemType } from '../../favorite.types';
// Components
import { FavoriteItemComponent } from './FavoriteItem.component'
// Redux
import { useActions } from './../../../../redux/hooks/useActions';

export interface FavoriteItemContainerProps {
  favoriteItem: FavoriteItemType;
	
}

export const FavoriteItemContainer = (props: FavoriteItemContainerProps) => {
  const {removeProductFromFavorite} = useActions()
  
  return (
    <FavoriteItemComponent
      {...props}
      removeProductFromFavorite={() => removeProductFromFavorite(props.favoriteItem.productId)}
    />
  )
}
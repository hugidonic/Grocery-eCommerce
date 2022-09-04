// React and packages
import React from 'react';
// Theme
import { spacing } from '../../../../theme';
import { FavoriteItemType } from '../../favorite.types';
// Components
import { Block } from '../../../../components';
import { FavoriteItem } from '../FavoriteItem';
 
export interface FavoriteListProps {
	favoriteItems?: FavoriteItemType[]
}

export const FavoriteList = (props: FavoriteListProps) => {
	const {
		favoriteItems = []
	} = props
	
	const renderFavoriteItem = (
		favoriteItem: FavoriteItemType,
		) => {
			return (
			<Block key={favoriteItem.productId} marginVertical={spacing[2]}>
				<FavoriteItem favoriteItem={favoriteItem} />
			</Block>
		)
	};

	return (
		<Block padding={[ 0, 0, 200, 0 ]}>
			{favoriteItems.map(renderFavoriteItem)}
		</Block>
	);
};

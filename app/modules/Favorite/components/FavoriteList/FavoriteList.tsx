// React and packages
import React from 'react';
// Theme
import { spacing } from '../../../../theme';
// Components
import { Block } from '../../../../components';
import { FavoriteItem } from '../FavoriteItem';
// Types
import { ProductType } from '../../../Products';
 
export interface FavoriteListProps {
	favoriteItems?: ProductType[]
}

export const FavoriteList = (props: FavoriteListProps) => {
	const {
		favoriteItems = []
	} = props
	
	const renderFavoriteItem = (
		favoriteItem: ProductType,
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

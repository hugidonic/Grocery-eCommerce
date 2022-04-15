// React and packages
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

// Types and utils
import { spacing } from '../../../../theme';
import { FavoriteItemType } from '../../favorite.types';
// Components
import { Block } from '../../../../components';
import { FavoriteListItem } from '..';
 
export interface FavoriteListProps {
	style?: StyleProp<ViewStyle>;
	favoriteItems?: FavoriteItemType[]
}

export const FavoriteList = (props: FavoriteListProps) => {

	const {
		favoriteItems = []
	} = props
	
	const renderFavoriteListItem = (
		product: FavoriteItemType,
		idx: number
		) => {
			return (
			<Block key={product.productId} marginVertical={spacing[2]}>
				<FavoriteListItem product={product} />
			</Block>
		)
	};

	return (
		<Block padding={[ 0, 0, 200, 0 ]}>
			{favoriteItems.map(renderFavoriteListItem)}
		</Block>
	);
};

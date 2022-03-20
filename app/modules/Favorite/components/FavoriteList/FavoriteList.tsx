// React and packages
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { observer } from 'mobx-react-lite';
// Types and utils
import { spacing } from '../../../../theme';
// Components
import { Block } from '../../../../components';
import { ProductType } from '../../../../models';
import { FavoriteListItem } from '..';
 
export interface FavoriteListProps {
	style?: StyleProp<ViewStyle>;
	favoriteItems?: ProductType[]
}

export const FavoriteList = observer(function FavoriteList(props: FavoriteListProps) {

	const {
		favoriteItems = []
	} = props
	
	const renderFavoriteListItem = (
		product: ProductType,
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
});

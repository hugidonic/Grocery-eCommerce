// React and packages
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { observer } from 'mobx-react-lite';
// Types and utils
import { spacing } from '../../../../theme';
import { data } from '../../../../utils/data';
// Components
import { Block } from '../../../../components';
import { ProductType, useStores } from '../../../../models';
import { FavoriteListItem } from '..';
 
export interface FavoriteListProps {
	style?: StyleProp<ViewStyle>;
}

export const FavoriteList = observer(function FavoriteList(props: FavoriteListProps) {

	const {UserStore: {favoriteItems}} = useStores()

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
			{favoriteItems.items.map(renderFavoriteListItem)}
		</Block>
	);
});

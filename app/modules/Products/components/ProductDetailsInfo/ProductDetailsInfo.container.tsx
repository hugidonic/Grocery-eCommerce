// React
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
// Redux and selectors
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';
import { useActions } from '../../../../redux/hooks/useActions';
import * as FavoriteSelectors from '../../../Favorite/favorite.selectors';
// Types and utils
import { ProductType } from '../../products.types';
// Component
import { ProductDetailsInfoComponent } from './ProductDetailsInfo.component';

export interface ProductDetailsInfoContainerProps {
	style?: StyleProp<ViewStyle>;
	product: ProductType;
}

export const ProductDetailsInfoContainer = (props: ProductDetailsInfoContainerProps) => {
	const { addProductToFavorite, removeProductFromFavorite } = useActions();
	const isFavorite = useTypedSelector(FavoriteSelectors.isFavorite(props.product.productId));

	return (
		<ProductDetailsInfoComponent
			{...props}
			addToFavorite={() => addProductToFavorite(props.product)}
			removeFromFavorite={() => removeProductFromFavorite(props.product.productId)}
			isFavorite={isFavorite}
		/>
	);
};

// React
import React from 'react';
// Redux and selectors
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';
import { useActions } from '../../../../redux/hooks/useActions';
import * as FavoriteSelectors from '../../../Favorite/favorite.selectors';
import * as ProductSelector from '../../../Products/products.selectors';
// Types and utils
import { ProductDetailsInfoContainerProps } from './ProductDetailsInfo.props';
// Component
import { ProductDetailsInfoComponent } from './ProductDetailsInfo.component';

export const ProductDetailsInfoContainer = (props: ProductDetailsInfoContainerProps) => {
	const {
		addProductToFavorite,
		removeProductFromFavorite,
		addProductToCart,
		removeProductFromCart
	} = useActions();

	const isFavorite = useTypedSelector(
		FavoriteSelectors.isFavorite(props.product.productId)
	);

	const isProductInCart: boolean = useTypedSelector(
		ProductSelector.isProductInCart(props.product.productId)
	);

	return (
		<ProductDetailsInfoComponent
			{...props}
			addToFavorite={() => addProductToFavorite(props.product)}
			removeFromFavorite={() => removeProductFromFavorite(props.product.productId)}
			isFavorite={isFavorite}
			isProductInCart={isProductInCart}
			addToCart={() => addProductToCart(props.product)}
			removeFromCart={() => removeProductFromCart(props.product.productId)}
		/>
	);
};

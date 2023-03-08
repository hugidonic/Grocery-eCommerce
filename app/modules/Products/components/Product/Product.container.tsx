// React and packages
import React from 'react';
import { navigationRef, useAppNavigation } from '../../../../navigators';
// Types
import { ProductContainerProps } from './Product.props';
// Componen
import { ProductComponent } from './Product.component';
// Redux
import { useActions } from './../../../../redux/hooks/useActions';
// Selectors
import * as ProductSelector from '../../products.selectors';
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';

export const ProductContainer = (props: ProductContainerProps) => {
	// Redux
	const { addProductToCart, removeProductFromCart } = useActions();
	const isProductInCart: boolean = useTypedSelector(ProductSelector.isProductInCart(props.product.productId));

	// Navigation
	const nav = useAppNavigation();
	/**
	 * Function that navigates to the product screen
	 */
	const handleNavigation = () => {
		if (navigationRef.isReady()) {
			nav.navigate('productDetails', { product: props.product });
		}
	};

	// Component
	return (
		<ProductComponent
			isProductInCart={isProductInCart}
			removeFromCart={() => removeProductFromCart(props.product.productId)}
			addToCart={() => addProductToCart(props.product)}
			handleNavigation={handleNavigation}
			{...props}
		/>
	);
};

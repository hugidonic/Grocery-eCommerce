import React from 'react'
import { ProductType } from '../../products.types'
// Component
import { ProductListComponent } from './ProductList.component'
import { navigationRef, useAppNavigation } from '../../../../navigators';

export interface ProductListContainerProps {
  title?: string,
  productsList?: ProductType[]
}

export const ProductListContainer = (props: ProductListContainerProps) => {
  
	const nav = useAppNavigation();
	
	const handleNavigation = () => {
		if (navigationRef.isReady()) {
			nav.navigate('category');
		}
	};
  
  return (
    <ProductListComponent
      OnPressSeeMore={handleNavigation}
      {...props}
    />
  )
}
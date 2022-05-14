import React from 'react'
import { CategoryItemComponent } from './CategoryItem.component'
import { StyleProp, ViewStyle } from 'react-native';
import { CategoryType } from '../../categories.types';
import { navigationRef, useAppNavigation } from '../../../../navigators';

export interface CategoryItemContainerProps {
	category: CategoryType;
	
}

export const CategoryItemContainer = (props: CategoryItemContainerProps) => {
	const nav = useAppNavigation();
	
	const handleNavigation = () => {
		if (navigationRef.isReady()) {
			nav.navigate('category', {categoryId: props.category.categoryId});
		}
	};
  
  return (
    <CategoryItemComponent {...props} navigateToCategory={handleNavigation} />
  )
}
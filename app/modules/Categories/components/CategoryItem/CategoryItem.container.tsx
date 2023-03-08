// React
import React from 'react'
// Component
import { CategoryItemComponent } from './CategoryItem.component'
// Types
import { CategoryItemContainerProps } from './CategoryItem.props';
// Navigation
import { navigationRef, useAppNavigation } from '../../../../navigators';


export const CategoryItemContainer = (props: CategoryItemContainerProps) => {
	const nav = useAppNavigation();
	/**
	 * Navigates to the category screen
	 */
	const handleNavigation = () => {
		if (navigationRef.isReady()) {
			nav.navigate('category', {categoryId: props.category.categoryId});
		}
	};
  
  return (
    <CategoryItemComponent {...props} navigateToCategory={handleNavigation} />
  )
}
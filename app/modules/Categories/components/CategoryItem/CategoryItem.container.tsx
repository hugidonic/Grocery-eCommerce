import React from 'react'
import { CategoryItemComponent } from './CategoryItem.component'
import { StyleProp, ViewStyle } from 'react-native';
import { CategoryType } from '../../categories.types';
import { useNavigation } from '@react-navigation/native';
import { navigationRef, NavigatorScreenProps } from '../../../../navigators';

export interface CategoryItemProps {
	category: CategoryType;
	style?: StyleProp<ViewStyle>;
	onPress?: () => void
}

export const CategoryItemContainer = (props: CategoryItemProps) => {
	const nav = useNavigation<NavigatorScreenProps>();
	
	const handleNavigation = () => {
		if (navigationRef.isReady()) {
			nav.navigate('category', {categoryId: props.category.categoryId});
		}
	};
  
  return (
    <CategoryItemComponent {...props} onPress={handleNavigation} />
  )
}
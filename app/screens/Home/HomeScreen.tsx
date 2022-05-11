// React and packages
import React, { FC } from 'react';

import { StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
// Types and utils
import { TabsNavigatorParamList } from '../../navigators';
import { colors, spacing } from '../../theme';
// Components
import {
	Screen,
	BgSlider,
	SearchBar,
	Loading,
} from '../../components';
import { CategoriesList, ProductList } from '../../modules';
// Selectors
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import * as ProductsSelector from '../../modules/Products/products.selectors'
import * as CategoriesSelector from '../../modules/Categories/categories.selectors'

export const HomeScreen: FC<
	StackScreenProps<TabsNavigatorParamList, 'home'>
> = () => {

	const ProductStore = useTypedSelector(state => state.ProductStore)
	const CategoriesStore = useTypedSelector(state => state.CategoriesStore)

	const fruits = useTypedSelector(ProductsSelector.fruits)
	const vegetables = useTypedSelector(ProductsSelector.vegetables)
	const allProducts = useTypedSelector(ProductsSelector.allProducts)
	const categories = useTypedSelector(CategoriesSelector.categories)
	
	if (ProductStore.isLoading || CategoriesStore.isLoading) {
		return <Loading />
	}
	
	return (
		<Screen style={styles.container} preset="scroll">
			{/* TODO: Make this a slider fadeinout thing */}
			<BgSlider />

			<ProductList title="Fruits" productsList={fruits} />
			<ProductList title="Vegetables" productsList={vegetables} />

			<CategoriesList categories={categories} />

			<ProductList title="Exclusive offer" productsList={fruits} />
			<ProductList title="Best selling" productsList={fruits} />

			<CategoriesList categories={categories} />

			<ProductList
				title="All"
				productsList={allProducts}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.offWhite,
		paddingHorizontal: spacing[5],
		paddingVertical: spacing[6]
	}
});

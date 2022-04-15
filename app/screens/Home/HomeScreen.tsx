// React and packages
import React, { FC } from 'react';

import { StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
// Mobx
import { CategoriesList, ProductList } from '../../modules';
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
// Selectors
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import * as ProductsSelector from '../../modules/Products/products.selectors'
import * as CategoriesSelector from '../../modules/Categories/categories.selectors'

export const HomeScreen: FC<
	StackScreenProps<TabsNavigatorParamList, 'home'>
> = () => {
	const ProductStore = useTypedSelector(state => state.ProductStore)
	const CategoriesStore = useTypedSelector(state => state.CategoriesStore)

	const allProducts = ProductStore.products

	const fruits = allProducts.filter(product => product.type === 'fruit')
	const vegetables = allProducts.filter(product => product.type === 'vegetable')
	const categories = CategoriesStore.categories
	// const allProducts = useTypedSelector(state => state.ProductStore.products)
	// const vegetables = useTypedSelector(ProductsSelector.vegetables)
	// const fruits = useTypedSelector(ProductsSelector.fruits)
	// const categories = useTypedSelector(CategoriesSelector.categories)

	if (ProductStore.isLoading || CategoriesStore.isLoading) {
		return <Loading />
	}
	
	return (
		<Screen style={styles.container} preset="scroll">
			<SearchBar />

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

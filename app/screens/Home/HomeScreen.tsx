// React and packages
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
// Theme
import { colors, spacing } from '../../theme';
// Types
import { RootStateType } from '../../redux/store';
import { TabsNavigatorParamList } from '../../navigators';
// Category Module
import { CategoriesList, CategoryType } from '../../modules/Categories';
// Product Module
import { ProductList, ProductType } from '../../modules/Products';
// Shared Components
import { Screen, BgSlider, Loading } from '../../components';
/* Selectors */
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import * as ProductsSelector from '../../modules/Products/products.selectors';
import * as CategoriesSelector from '../../modules/Categories/categories.selectors';

export const HomeScreen: FC<StackScreenProps<TabsNavigatorParamList, 'home'>> = () => {
	const ProductStore = useTypedSelector((state: RootStateType) => state.ProductStore);
	const CategoriesStore = useTypedSelector((state: RootStateType) => state.CategoriesStore);

	const fruits: ProductType[] = useTypedSelector(ProductsSelector.getFruits);
	const vegetables: ProductType[] = useTypedSelector(ProductsSelector.getVegetables);
	const allProducts: ProductType[] = useTypedSelector(ProductsSelector.allProducts);
	const categories: CategoryType[] = useTypedSelector(CategoriesSelector.categories);

	if (ProductStore.isLoading || CategoriesStore.isLoading) {
		return <Loading />;
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

			<ProductList title="All" productsList={allProducts} />
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.offWhite,
		paddingHorizontal: spacing[5],
		minHeight: '100%'
	}
});

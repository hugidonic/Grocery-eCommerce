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
} from '../../components';
// Selectors
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import * as ProductsSelector from '../../modules/Products/products.selectors'


export const HomeScreen: FC<
	StackScreenProps<TabsNavigatorParamList, 'home'>
> = () => {
	
	const fruits = useTypedSelector(ProductsSelector.fruits)
	const vegetables = useTypedSelector(ProductsSelector.vegetables)
	const allProducts = useTypedSelector(ProductsSelector.allProducts)
	

	return (
		<Screen style={styles.container} preset="scroll">
			<SearchBar />

			{/* TODO: Make this a slider fadeinout thing */}
			<BgSlider />

			<ProductList title="Fruits" productsList={fruits} />
			<ProductList title="Vegetables" productsList={vegetables} />

			<CategoriesList />

			<ProductList title="Exclusive offer" productsList={fruits} />
			<ProductList title="Best selling" productsList={fruits} />

			<CategoriesList />

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

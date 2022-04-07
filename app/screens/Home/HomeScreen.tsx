// React and packages
import React, { FC } from 'react';

import { StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
// Mobx
import { CategoriesList, ProductList } from '../../modules';
// Types and utils
import { TabsNavigatorParamList } from '../../navigators';
import { colors, spacing } from '../../theme';
import { data } from '../../utils/data';
// Components
import {
	Screen,
	BgSlider,
	SearchBar,
} from '../../components';


export const HomeScreen: FC<
	StackScreenProps<TabsNavigatorParamList, 'home'>
> = () => {

	return (
		<Screen style={styles.container} preset="scroll">
			<SearchBar />

			{/* TODO: Make this a slider fadeinout thing */}
			<BgSlider />

			<ProductList title="Fruits" productsList={data.products.fruit} />
			<ProductList title="Vegetables" productsList={data.products.vegetable} />

			<CategoriesList />

			<ProductList title="Exclusive offer" productsList={data.products.fruit} />
			<ProductList title="Best selling" productsList={data.products.fruit} />

			<CategoriesList />

			<ProductList
				title="All"
				productsList={[ ...data.products.vegetable, ...data.products.fruit ]}
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

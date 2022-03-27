// React and packages
import React, { FC } from 'react';

import { StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
// Mobx
import { GroupList, ProductList } from '../../modules';
import { useStores } from '../../RootStore';
// Types and utils
import { TabsNavigatorParamList } from '../../navigators';
import { colors, spacing } from '../../theme';
import { data } from '../../utils/data';
// Components
import {
	Screen,
	BgSlider,
	SearchBar,
	Loading,
} from '../../components';


export const HomeScreen: FC<
	StackScreenProps<TabsNavigatorParamList, 'home'>
> = () => {

	const {ProductsStore} = useStores()

	React.useEffect(() => {
		ProductsStore.loadProductsFromApi()
	}, [])

	if (!ProductsStore.IsLoading) {
		return <Loading />
	}
	
	return (
		<Screen style={styles.container} preset="scroll">
			<SearchBar />

			{/* TODO: Make this a slider fadeinout thing */}
			<BgSlider />

			<ProductList title="Fruits" productsList={data.products.fruits} />
			<ProductList title="Vegetables" productsList={data.products.vegetables} />

			<GroupList />

			<ProductList title="Exclusive offer" productsList={data.products.fruits} />
			<ProductList title="Best selling" productsList={data.products.fruits} />

			<GroupList />

			<ProductList
				title="All"
				productsList={[ ...data.products.vegetables, ...data.products.fruits ]}
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

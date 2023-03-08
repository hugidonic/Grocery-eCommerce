// React and packages
import React, { FC } from 'react';

import { FlatList, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
// Theme
import { colors } from '../../theme';
// Types
import { NavigatorParamList } from '../../navigators';
// Shared Components
import { Screen } from '../../components';
// Product Module
import { Product, ProductDetailsHeader } from '../../modules/Products';
// Selectors
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import * as ProductSelectors from '../../modules/Products/products.selectors';

export const CategoryScreen: FC<StackScreenProps<NavigatorParamList, 'category'>> = (props) => {
	// const { categoryId } = props.route.params;
	const allProducts = useTypedSelector(ProductSelectors.allProducts);
	return (
		<Screen style={styles.container} preset="fixed">
			<ProductDetailsHeader goBack={props.navigation.goBack} />
			<FlatList
				// TODO: MAKE THIS RIGHT
				data={allProducts}
				renderItem={({ item }) => <Product product={item} />}
				numColumns={2}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item) => item.productId}
				style={{
					paddingHorizontal: 20
				}}
				columnWrapperStyle={{
					justifyContent: 'space-between'
				}}
			/>
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.offWhite
	}
});

// React and packages
import React, { FC } from 'react';

import { FlatList, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
// Types and utils
import { NavigatorParamList } from '../../navigators';
import { colors, spacing } from '../../theme';
// Components
import { Screen, Text } from '../../components';
import { Product, ProductDetailsHeader } from '../../modules';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import * as ProductSelectors from '../../modules/Products/products.selectors'

export const CategoryScreen: FC<StackScreenProps<NavigatorParamList, 'category'>> = (
	props
) => {
	// const { categoryId } = props.route.params;
  const allProducts = useTypedSelector(ProductSelectors.allProducts)
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

// React and packages
import React, { FC } from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
// Theme
import { colors, spacing } from '../../theme';
// Category Module
import { CategoryType } from '../../modules/Categories';
// Product Module
import { Product, ProductType } from '../../modules/Products';
// Types
import { NavigatorParamList } from '../../navigators';
// Shared Components
import { Block, Loading, Screen, SearchBar, Text } from '../../components';
// Selectors
import * as ProductSelectors from '../../modules/Products/products.selectors';
import * as CategoriesSelectors from '../../modules/Categories/categories.selectors';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';

const { width } = Dimensions.get('screen');

export type ExploreScreenProps = StackScreenProps<NavigatorParamList, 'TabsStack'>;

export const ExploreScreen: FC<ExploreScreenProps> = (props) => {
	const [ searchText, setSearchText ] = React.useState<string>('');

	const IsLoading: boolean = useTypedSelector((state) => state.CategoriesStore.isLoading);
	const filteredProducts: ProductType[] = useTypedSelector(
		ProductSelectors.productsFilteredByName(searchText)
	);
	const categories: CategoryType[] = useTypedSelector(CategoriesSelectors.categories);

	if (IsLoading) {
		return <Loading />;
	}

	const renderCategory = (category: CategoryType) => (
		<Block
			style={styles.category}
			bRadius={14}
			shadow
			color={category.color}
			key={category.categoryId}
		>
			<TouchableOpacity
				style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
				onPress={() =>
					props.navigation.navigate('category', {
						categoryId: category.categoryId
					})}
			>
				<Image source={{uri: category.pictureUri}} style={styles.image} />
				<Text weight="bold" size="large">
					{category.name}
				</Text>
			</TouchableOpacity>
		</Block>
	);

	return (
		<Screen style={styles.container} preset="scroll">
			<Block justify="center" align="center" style={{ marginVertical: 30 }}>
				<Text weight="black" size="title">
					Find Products
				</Text>
			</Block>

			<Block style={{ marginBottom: 15 }}>
				<SearchBar search={searchText} setSearch={setSearchText} />
			</Block>

			{searchText.length === 0 ? (
				<Block style={{ flexWrap: 'wrap', justifyContent: 'space-between' }} row>
					{categories.map((cat, idx) => {
						return <Block key={cat.categoryId}>{renderCategory(cat)}</Block>;
					})}
				</Block>
			) : (
				<React.Fragment>
					<Text weight="bold" size="medium">
						Products
					</Text>
					<Block style={{ flexWrap: 'wrap', justifyContent: 'space-between' }} row>
						{filteredProducts.map((product, idx) => {
							return (
								<Block key={product.productId}>
									<Product product={product} />
								</Block>
							);
						})}
					</Block>
				</React.Fragment>
			)}
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.offWhite,
		paddingHorizontal: spacing[5],
		minHeight: '100%'
	},
	image: {
		resizeMode: 'contain',
		marginBottom: 20,
		width: 80,
		height: 80
	},
	category: {
		width: width * 0.5 - 32,
		height: 180,
		marginBottom: spacing[4]
	}
});

// React and packages
import React from "react";
import { FlatList, Dimensions } from "react-native";
// Theme
import { CategoryType } from "../../categories.types";
// Components
import { Block } from "../../../../components";
import { CategoryItem } from "../CategoryItem";

export interface CategoriesListProps {
	categories?: CategoryType[];
}

const { width } = Dimensions.get('screen');

export const CategoriesList = (props: CategoriesListProps) => {
	const {categories = []} = props
	
	return (
		<FlatList
			data={categories}
			renderItem={({ item }) => <CategoryItem category={item} />}
			keyExtractor={(item) => item.categoryId}
			horizontal
			showsHorizontalScrollIndicator={false}
			ListHeaderComponent={() => <Block style={{ width: 20 }} />}
			ListFooterComponent={() => <Block style={{ width: 20 }} />}
			style={{ marginLeft: -20, width, marginVertical: 20 }}
			ItemSeparatorComponent={() => (
				<Block style={{ marginHorizontal: 10 }} />
			)}
		/>
	);
}
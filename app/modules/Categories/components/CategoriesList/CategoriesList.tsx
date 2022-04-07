// React and packages
import React from "react";
import { StyleProp, ViewStyle, FlatList, Dimensions } from "react-native";
;
// Types and utils
import { data } from "../../../../utils/data";
// Components
import { CategoriesListItem } from "..";
import { Block } from "../../../../components";

export interface CategoriesListProps {
  style?: StyleProp<ViewStyle>;
}

const { width } = Dimensions.get('screen');

export const CategoriesList = (props: CategoriesListProps) => {
	return (
		<FlatList
			data={data.categories}
			renderItem={({ item }) => <CategoriesListItem category={item} />}
			keyExtractor={(item, idx) => idx.toString()}
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
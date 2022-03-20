// React and packages
import React from "react";
import { StyleProp, ViewStyle, FlatList, Dimensions } from "react-native";
import { observer } from "mobx-react-lite";
// Types and utils
import { data } from "../../../../utils/data";
// Components
import { GroupListItem } from "..";
import { Block } from "../../../../components";

export interface GroupListProps {
  style?: StyleProp<ViewStyle>
}

const { width } = Dimensions.get('screen');

export const GroupList = observer(function GroupList(props: GroupListProps) {
	return (
		<FlatList
			data={data.groups}
			renderItem={({ item }) => <GroupListItem group={item} />}
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
})
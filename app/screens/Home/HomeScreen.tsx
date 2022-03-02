// React and packages
import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
// Types and utils
import { TabsNavigatorParamList } from '../../navigators';
import { colors, spacing } from '../../theme';
// Components
import {
	ProductList,
	Screen,
	GroupList,
	BgSlider,
	SearchBar,
} from '../../components';
import { data } from '../../utils/data';

export const HomeScreen: FC<
	StackScreenProps<TabsNavigatorParamList, 'home'>
> = observer(function HomeScreen() {
	return (
		<Screen style={styles.container} preset="scroll">
			<SearchBar />

			{/* TODO: Make this a slider fadeinout thing */}
			<BgSlider />

			<ProductList title="Fruits" data={data.products.fruits} />
			<ProductList title="Vegetables" data={data.products.vegetables} />

			<GroupList />

			<ProductList title="Exclusive offer" data={data.products.fruits} />
			<ProductList title="Best selling" data={data.products.fruits} />

			<GroupList />

			<ProductList
				title="All"
				data={[ ...data.products.vegetables, ...data.products.fruits ]}
			/>
		</Screen>
	);
});

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.offWhite,
		paddingHorizontal: spacing[5],
		paddingVertical: spacing[6]
	}
});

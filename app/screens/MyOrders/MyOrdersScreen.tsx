// React and packages
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { FlatList, Pressable, StyleSheet } from 'react-native';
// Types and utils
import { ProfileNavigatorParamList, useAppNavigation } from '../../navigators';
import { colors, spacing } from '../../theme';
// Components
import { Screen, Header, Text } from '../../components';
import { FilterOrders, OrderItem } from '../../modules/Orders';
// Data
import { orders } from '../../utils/data';

interface MyOrdersScreenProps extends StackScreenProps<ProfileNavigatorParamList, 'myOrders'> {}

export const MyOrdersScreen = (props: MyOrdersScreenProps) => {
	const [ activeType, setActiveType ] = React.useState<'ACTIVE' | 'FINISHED'>('ACTIVE');

	const visibleOrders = orders.filter((o) => o.type === activeType);
	const nav = useAppNavigation();

	return (
		<Screen style={[ styles.container ]} preset="fixed">
			<Header title="My orders" />
			{/* Filter orders */}
			<FilterOrders activeType={activeType} setActiveType={setActiveType} />

			{/* Text to display if there are no orders*/}
			{visibleOrders.length === 0 && (
				<Text size="medium" style={{ textAlign: 'center', marginVertical: spacing[6] }}>
					There is no {activeType.toLowerCase()} orders...
				</Text>
			)}

			{/* Orders */}
			<FlatList
				data={visibleOrders}
				renderItem={({ item, index }) => (
					<Pressable onPress={() => nav.navigate('ProfileStack', {screen: 'orderDetails', params: {orderItem: item}})}>
						<OrderItem idx={index + 1} num={item.num} date={item.date} price={item.price} />
					</Pressable>
				)}
				keyExtractor={(item) => item.num}
			/>
		</Screen>
	);
};



const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.offWhite,
		paddingHorizontal: spacing[5],
		paddingVertical: spacing[6]
	}
});

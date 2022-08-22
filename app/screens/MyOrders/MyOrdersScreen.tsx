// React and packages
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { FlatList, StyleSheet } from 'react-native';
// Types and utils
import { OrderType } from '../../modules/Orders';
import { ProfileNavigatorParamList } from '../../navigators';
import { colors, spacing } from '../../theme';
import uuid from '../../utils/uuid';
// Components
import { Screen, Header, Block, Text } from '../../components';
import { FilterOrders, OrderItem } from '../../modules/Orders';

interface MyOrdersScreenProps extends StackScreenProps<ProfileNavigatorParamList, 'myOrders'> {}

export const MyOrdersScreen = (props: MyOrdersScreenProps) => {
	const [ activeType, setActiveType ] = React.useState<'ACTIVE' | 'FINISHED'>('ACTIVE');

	const visibleOrders = orders.filter((o) => o.type === activeType);

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
					<OrderItem idx={index + 1} num={item.num} date={item.date} price={item.price} />
				)}
				keyExtractor={(item) => item.num}
			/>
		</Screen>
	);
};

const orders: OrderType[] = [
	{
		num: uuid().slice(0, 3),
		date: new Date().toISOString(),
		price: 32.99,
		type: 'ACTIVE',
	}, 
	{
		num: uuid().slice(0, 3),
		date: new Date().toISOString(),
		price: 1234.99, 
		type: 'FINISHED',
	}, 
	{
		num: uuid().slice(0, 3),
		date: new Date().toISOString(),
		price: 3.99,
		type: 'FINISHED'
	}
];

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.offWhite,
		paddingHorizontal: spacing[5],
		paddingVertical: spacing[6]
	}
});

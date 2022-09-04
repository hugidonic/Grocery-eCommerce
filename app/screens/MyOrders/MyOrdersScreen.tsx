// React and packages
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { FlatList, Pressable, StyleSheet } from 'react-native';
// Types and utils
import { ProfileNavigatorParamList } from '../../navigators';
import { colors, spacing } from '../../theme';
// Components
import { Screen, Header, Text } from '../../components';
import { FilterOrders, OrderItem, OrderItemType } from '../../modules/Orders';
// Selectors
import * as OrderSelectors from '../../modules/Orders/order.selectors'
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';

interface MyOrdersScreenProps extends StackScreenProps<ProfileNavigatorParamList, 'myOrders'> {}

export const MyOrdersScreen = (props: MyOrdersScreenProps) => {
	const [ activeType, setActiveType ] = React.useState<'ACTIVE' | 'FINISHED'>('ACTIVE');


	// Get orderItems from store
	const orderItems: OrderItemType[] = useTypedSelector(OrderSelectors.getOrderItems)
	// Order items to display depending on active type 
	const visibleOrders = orderItems.filter((o) => o.type === activeType);
	// To navigate to order details
	const nav = props.navigation

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
				showsVerticalScrollIndicator={false}
				renderItem={({ item, index }) => (
					<Pressable onPress={() => nav.navigate('orderDetails', {orderItem: item})}>
						<OrderItem idx={index + 1} id={item.id} date={item.date} price={item.price} />
					</Pressable>
				)}
				keyExtractor={(item) => item.id}
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

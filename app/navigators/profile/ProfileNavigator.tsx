import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
	AboutScreen,
	DeliveryAddressScreen,
	HelpScreen,
	MyDetailsScreen,
	MyOrdersScreen,
	NotificationsScreen,
	PaymentMethodsScreen,
	PromoCardsScreen
} from '../../screens';

export type ProfileNavigatorParamList = {
	myOrders: undefined;
	myDetails: undefined;
	deliveryAddress: undefined;
	paymentMethods: undefined;
	promoCards: undefined;
	notifications: undefined;
	help: undefined;
	about: undefined;
};

const Stack = createStackNavigator<ProfileNavigatorParamList>();

export const ProfileNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{ cardStyle: { backgroundColor: 'transparent' }, headerShown: false }}
		>
			<Stack.Screen name="myOrders" component={MyOrdersScreen} />
			<Stack.Screen name="myDetails" component={MyDetailsScreen} />
			<Stack.Screen name="deliveryAddress" component={DeliveryAddressScreen} />
			<Stack.Screen name="paymentMethods" component={PaymentMethodsScreen} />
			<Stack.Screen name="promoCards" component={PromoCardsScreen} />
			<Stack.Screen name="notifications" component={NotificationsScreen} />
			<Stack.Screen name="help" component={HelpScreen} />
			<Stack.Screen name="about" component={AboutScreen} />
		</Stack.Navigator>
	);
};

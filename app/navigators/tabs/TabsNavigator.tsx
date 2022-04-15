import React from 'react';
import {
	createBottomTabNavigator,
	BottomTabNavigationOptions
} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RouteProp } from '@react-navigation/native';
import { colors } from '../../theme';
import { NavigatorParamList } from '..';
import { Text } from '../../components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// Screens
import {
	HomeScreen,
	CartScreen,
	ExploreScreen,
	FavoriteScreen,
	ProfileScreen
} from '../../screens';

type screenOptionsType =
	| BottomTabNavigationOptions
	| ((
			props: {
				route: RouteProp<
					TabsNavigatorParamList,
					keyof TabsNavigatorParamList
				>;
				navigation: any;
			}
		) => BottomTabNavigationOptions);

const tabsScreenOptions: screenOptionsType = ({ route }) => ({
	headerShown: false,
	//TODO: Make tab bar look better
	tabBarStyle: {},
	tabBarInActiveTintColor: colors.dim,
	tabBarLabel: ({ focused, color, position }) => {
		return focused ? (
			<Text text={route.name} size='small' color={colors.primary} />
		) : null;
	},
	tabBarActiveTintColor: colors.primary,
	tabBarIcon: ({ focused, color, size }) => {
		let IconName;
		switch (route.name) {
			case 'home':
				IconName = focused ? 'md-home' : 'md-home-outline';
				break;
			case 'explore':
				IconName = focused ? 'ios-search' : 'ios-search-outline';
				break;
			case 'cart':
				IconName = focused ? 'ios-cart' : 'ios-cart-outline';
				break;
			case 'favorite':
				IconName = focused ? 'heart-sharp' : 'heart-outline';
				break;
			case 'profile':
				IconName = focused ? 'ios-person' : 'person-outline';
				break;
			default:
				IconName = 'md-home';
		}
		return (
			<Ionicons
				name={IconName}
				color={focused ? colors.primary : colors.dim}
				size={size}
			/>
		);
	}
});

export type TabsNavigatorParamList = {
	home: undefined;
	explore: undefined;
	cart: undefined;
	favorite: undefined;
	profile: undefined;
};
export type TabsStackScreenProps = NativeStackScreenProps<
	NavigatorParamList,
	'TabsStack'
>;

const Stack = createBottomTabNavigator<TabsNavigatorParamList>();

export const TabsNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={tabsScreenOptions}
			initialRouteName="home"
		>
			<Stack.Screen name="home" component={HomeScreen} />
			<Stack.Screen name="explore" component={ExploreScreen} />
			<Stack.Screen name="cart" component={CartScreen} />
			<Stack.Screen name="favorite" component={FavoriteScreen} />
			<Stack.Screen name="profile" component={ProfileScreen} />
		</Stack.Navigator>
	);
};

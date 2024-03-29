import React from 'react';
import { useColorScheme } from 'react-native';
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
	NavigatorScreenParams,
	useNavigation
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef, useBackButtonHandler } from './navigation-utilities';
import { ProfileNavigatorParamList, TabsNavigator, ProfileNavigator, TabsNavigatorParamList } from '.';
// import { CreateProductScreen } from '../screens';
import { StackNavigationProp } from '@react-navigation/stack';
// Types
import { ProductType } from '../modules';
// Screens
import { CategoryScreen, ProductDetailsScreen, TermsAndConditionsScreen } from '../screens';
import { CategoryType } from '../modules/Categories';

/**
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type NavigatorParamList = {
	TabsStack: NavigatorScreenParams<TabsNavigatorParamList>;
	ProfileStack: NavigatorScreenParams<ProfileNavigatorParamList>;

	productDetails: {product: ProductType };
	createProduct: undefined;
	category: {categoryId: CategoryType['categoryId']} | undefined;
	termsAndConditions: undefined
};

export type NavigatorScreenProps = StackNavigationProp<NavigatorParamList>
export const useAppNavigation = () => useNavigation<NavigatorScreenProps>()

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<NavigatorParamList>();

const AppStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
			initialRouteName='TabsStack'
		>
			<Stack.Screen name="TabsStack" component={TabsNavigator} />
			<Stack.Screen name='ProfileStack' component={ProfileNavigator} />
			<Stack.Screen name="productDetails" component={ProductDetailsScreen} />
			<Stack.Screen name="category" component={CategoryScreen} />
			<Stack.Screen name="termsAndConditions" component={ TermsAndConditionsScreen } />
			{/* <Stack.Screen name="createProduct" component={CreateProductScreen} /> */}
		</Stack.Navigator>
	);
};

interface NavigationProps
	extends Partial<React.ComponentProps<typeof NavigationContainer>>{}

export const AppNavigator = (props: NavigationProps) => {
	const colorScheme = useColorScheme();
	useBackButtonHandler(canExit);

	return (
		<NavigationContainer
			ref={navigationRef}
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
			{...props}
		>
			<AppStack />
		</NavigationContainer>
	);
};

AppNavigator.displayName = 'AppNavigator';

const exitRoutes = [];
/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
export const canExit = (routeName: string) => exitRoutes.includes(routeName);

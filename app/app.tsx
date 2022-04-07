// React and packages
import 'react-native-gesture-handler';
import './utils/ignore-warnings';
import React from 'react';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
// Wrappers
import { AppNavigator } from './navigators';
import { ToggleStorybook } from '../storybook/toggle-storybook';
import { ErrorBoundary } from './screens/Error/ErrorBoundry';
import { Provider, useDispatch, useSelector } from 'react-redux';
// Redux
import { store } from './redux/store';
import { Block, Text } from './components';
import { Pressable } from 'react-native';

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

const App = () => {
	return (
		<Provider store={store}>
			{/* <ToggleStorybook> */}
			{/* <SafeAreaProvider initialMetrics={initialWindowMetrics}> */}
			<ErrorBoundary catchErrors={'prod'}>
				<Comp />
				{/* <AppNavigator /> */}
			</ErrorBoundary>
			{/* </SafeAreaProvider> */}
			{/* </ToggleStorybook> */}
		</Provider>
	);
};

const Comp = () => {
	const dispatch = useDispatch()

	return (
		<Pressable onPress={() => dispatch({type: "LOAD"})}>
			<Block border bRadius={20} align="center">
				<Text size="title">click here</Text>
			</Block>
		</Pressable>
	);
};

export default gestureHandlerRootHOC(App);

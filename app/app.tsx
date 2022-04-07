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

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

const App = () => {
	return (
		<Provider store={store}>
			<ToggleStorybook>
				<SafeAreaProvider initialMetrics={initialWindowMetrics}>
					<ErrorBoundary catchErrors={'prod'}>
						<AppNavigator />
					</ErrorBoundary>
				</SafeAreaProvider>
			</ToggleStorybook>
		</Provider>
	);
};

export default gestureHandlerRootHOC(App);

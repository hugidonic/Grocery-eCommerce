import 'react-native-gesture-handler';
import './utils/ignore-warnings';
import React from 'react';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { AppNavigator } from './navigators';
import { ToggleStorybook } from '../storybook/toggle-storybook';
import { ErrorBoundary } from './screens/Error/ErrorBoundry';

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

const App = () => {

	return (
		<ToggleStorybook>
			<SafeAreaProvider initialMetrics={initialWindowMetrics}>
				<ErrorBoundary catchErrors={'prod'}>
					<AppNavigator />
				</ErrorBoundary>
			</SafeAreaProvider>
		</ToggleStorybook>
	);
};

export default gestureHandlerRootHOC(App);

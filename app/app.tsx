import './utils/ignore-warnings';
import React, { useState, useEffect } from 'react';
import {
	SafeAreaProvider,
	initialWindowMetrics
} from 'react-native-safe-area-context';
import { initFonts } from './theme/fonts'; // expo
import * as storage from './utils/storage';
import { AppNavigator, useNavigationPersistence } from './navigators';
import { RootStore, RootStoreProvider, setupRootStore } from './models';
import { ToggleStorybook } from '../storybook/toggle-storybook';
import { ErrorBoundary } from './screens/error/error-boundary';

// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

/**
 * This is the root component of our app.
 */
const App = () => {
	const [ rootStore, setRootStore ] = useState<RootStore | undefined>(
		undefined
	);

	const {
		initialNavigationState,
		onNavigationStateChange,
		isRestored: isNavigationStateRestored
	} = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

	// Kick off initial async loading actions, like loading fonts and RootStore
	useEffect(() => {
		(async () => {
			await initFonts(); // expo
			setupRootStore().then(setRootStore);
		})();
	}, []);

	if (!rootStore || !isNavigationStateRestored) return null;

	return (
		<ToggleStorybook>
			<RootStoreProvider value={rootStore}>
				<SafeAreaProvider initialMetrics={initialWindowMetrics}>
					<ErrorBoundary catchErrors={'always'}>
						<AppNavigator
							initialState={initialNavigationState}
							onStateChange={onNavigationStateChange}
						/>
					</ErrorBoundary>
				</SafeAreaProvider>
			</RootStoreProvider>
		</ToggleStorybook>
	);
}

export default App;

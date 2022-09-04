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
import { Provider } from 'react-redux';
// Redux
import { store } from './redux/store';
import { useActions } from './redux/hooks/useActions';
// Utils
export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

const App = () => {
	const { loadCategories, loadProducts, loadCartItems, loadFavoriteItems } = useActions();

	// Kick off initial async loading actions
	React.useEffect(() => {
		// Load Products to show them in HomeScreen
		loadProducts();
		// Load categories to show them in HomeScreen
		loadCategories();
		// Load cart items to check added items
		loadCartItems();
		// Load Favorite items to check is product
		loadFavoriteItems();
	}, []);

	return (
		<ToggleStorybook>
			<SafeAreaProvider initialMetrics={initialWindowMetrics}>
				<ErrorBoundary catchErrors={'always'}>
					<AppNavigator />
				</ErrorBoundary>
			</SafeAreaProvider>
		</ToggleStorybook>
	);
};

export default gestureHandlerRootHOC(() => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
});

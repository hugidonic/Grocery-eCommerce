import { Environment } from '../utils/Environment';
import * as storage from '../utils/storage';
import { RootStoreType } from './rootReducer';

const ROOT_STATE_STORAGE_KEY = 'root';

/**
 * Setup the environment that all the models will be sharing.
 *
 * The environment includes other functions that will be picked from some
 * of the models that get created later. This is how we loosly couple things
 * like events between models.
 */
export async function createEnvironment() {
	const env = new Environment();
	await env.setup();
	return env;
}

export async function setupRootStore() {
	const env = await createEnvironment();

	/**
   *  get info from local storage and pass it to the root store
   */
}

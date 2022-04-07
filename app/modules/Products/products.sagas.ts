import { call, put, fork, takeLatest } from 'redux-saga/effects';
import { createAPI, CreateApiType, GetProductsResult } from '../../services/api';
import { ProductsActions, ProductsTypes } from './products.types';

const api = createAPI();

export function* ProductsWatcherSaga() {
	// * Start loading on commannd
	// yield takeLatest(ProductsTypes.LOAD_PRODUCTS, loadProducts, api)
	// *  Start loading when runs the app
	yield fork(loadProducts, api);
}

function* loadProducts(api: CreateApiType) {
	const response: GetProductsResult = yield call(api.getProducts);

	if (response.kind === 'ok') {
		yield put({
			type: ProductsTypes.SET_PRODUCTS,
			payload: response.products
		});
	} else {
		yield put({
			type: ProductsTypes.SET_ERROR,
			payload: response.kind
		});
	}
}

import { call, put, fork } from 'redux-saga/effects';
import { createAPI, CreateApiType, GetProductsResult } from '../../services/api';
import { ProductsActions } from './products.actions';

const api = createAPI();

export function* ProductsWatcherSaga() {
	yield fork(loadProducts, api);
}

function* loadProducts(api: CreateApiType) {
  yield put({type: ProductsActions.Type.LOAD_PRODUCTS})
	const response: GetProductsResult = yield call(api.getProducts);

  if (response.kind === 'ok') {
    yield put({
      type: ProductsActions.Type.SET_PRODUCTS,
      payload: response.products,
      error: null
    });
  } else {
    yield put({
      type: ProductsActions.Type.SET_PRODUCTS,
      payload: response.kind,
      error: true,
    });
  }

  
}

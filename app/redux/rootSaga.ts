import { all, call, spawn, fork, put, takeEvery, takeLatest, CallEffect} from 'redux-saga/effects'
import { ProductsWatcherSaga } from '../modules/Products/products.sagas'


export function* rootSaga() {
  yield all([
    ProductsWatcherSaga
  ])
}
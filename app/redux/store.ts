import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'

const sagaMiddleware = createSagaMiddleware()


export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
  
sagaMiddleware.run(rootSaga)

/**
 *  Infer the `RootState` types from the store itself
 */
export type RootStateType = ReturnType<typeof store.getState>
/**
 *  Infer the `AppDispatch` types from the store itself
 */
export type AppDispatchType = typeof store.dispatch

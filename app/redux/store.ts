import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createAPI } from '../services/api'
import { rootReducer } from './rootReducer'


export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export const API = createAPI()
  
/**
 *  Infer the `RootState` types from the store itself
 */
export type RootStateType = ReturnType<typeof store.getState>
/**
 * Basic state with loading and error message 
 */
export interface BaseInitialState {
  isLoading: boolean,
  errorMessage: string | null,
}
/**
 *  Infer the `AppDispatch` types from the store itself
 */
export type AppDispatchType = typeof store.dispatch

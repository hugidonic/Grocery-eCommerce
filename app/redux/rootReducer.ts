import { combineReducers } from "redux";

const initialState = {}

const appRed = (state = initialState, { type, payload }) => {
  return state
}

export type RootStoreType = {
  app: any
}


export const rootReducer = combineReducers({
  app: appRed
})
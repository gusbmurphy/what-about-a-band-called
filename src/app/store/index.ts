import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import bandsReducer from "./slices/bands-slice";
import sessionReducer from "./slices/session-slice";
import userRecordsReducer from "./slices/user-records-slice";
import userProfileReducer from "./slices/user-profile-slice";

import * as sagas from "./sagas";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const rootReducer = combineReducers({
  bands: bandsReducer,
  session: sessionReducer,
  userRecords: userRecordsReducer,
  userProfile: userProfileReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

for (const saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}

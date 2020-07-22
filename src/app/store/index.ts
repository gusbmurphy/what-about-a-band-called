import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import bandsReducer from "./slices/bands-slice";
import sessionReducer from "./slices/session-slice";
import * as sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const rootReducer = combineReducers({
  bands: bandsReducer,
  session: sessionReducer
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

for (const saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}

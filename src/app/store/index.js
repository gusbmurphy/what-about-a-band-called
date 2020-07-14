import { combineReducers } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import * as reducers from "./reducers";
import * as sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: combineReducers(reducers),
  middleware: middleware,
});

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}

import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import * as reducers from "./reducers";
import * as sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const reduxLogger = createLogger();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware, reduxLogger];

export const store = configureStore({
  reducer: combineReducers(reducers),
  middleware: middleware,
});

// export const store = createStore(
//   combineReducers(reducers),
//   applyMiddleware(createLogger(), sagaMiddleware)
// );

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}

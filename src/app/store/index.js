import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import bandsReducer from "./slices/bands-slice";
import sessionReducer from "./slices/session-slice";
import * as reducers from "./reducers";
import * as sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: combineReducers({
    bands: bandsReducer,
    session: sessionReducer
  }),
  middleware: middleware,
});

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}

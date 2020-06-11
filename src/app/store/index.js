import { createStore, applyMiddleware, combineReducers } from "redux";
import { defaultState } from "../../server/defaultState";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
import * as sagas from "./sagas.mock";
import * as mutations from "./mutations";
import { useStore } from "react-redux";

export const store = createStore(
    combineReducers({
        bands(bands = defaultState.bands, action) {
            switch(action.type) {
                case mutations.CREATE_BAND:
                    return [...bands, {
                        id: action.id,
                        owner: action.owner,
                        name: action.name,
                        score: 0,
                        flags: 0
                    }]
                case mutations.MODIFY_BAND_SCORE:
                    let targetBandIndex = bands.findIndex((band) => band.id === action.bandID);
                    let targetBand = bands.splice(targetBandIndex, 1)[0];
                    targetBand.score = targetBand.score + action.value;
                    bands.splice(targetBandIndex, 0, targetBand);
                    return bands;
            }
            return bands;
        },
        users(users = defaultState.users, action) {
            return users;
        }
    }),
    applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}
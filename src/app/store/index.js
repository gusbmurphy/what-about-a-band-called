import { createStore, applyMiddleware, combineReducers } from "redux";
import { defaultState } from "../../server/defaultState";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
// import * as sagas from "./sagas.mock";
import * as sagas from "./sagas";
import * as mutations from "./mutations";
import { useStore } from "react-redux";

export const store = createStore(
  combineReducers({
    // TODO: I don't really understand what session is supposed to be, I'm getting userID from the session, what's going on?
    session(defaultSession = defaultState.session || {}, action) {
      var { type, authenticated, session } = action;
      switch (type) {
        case mutations.REQUEST_AUTHENTICATE_USER:
          return { ...defaultSession, authenticated: mutations.AUTHENTICATING };
        case mutations.PROCESSING_AUTHENTICATE_USER:
          return { ...defaultSession, authenticated, userID: session.userID };
        default:
          return defaultSession;
      }
    },
    bands(bands = defaultState.bands, action) {
      switch (action.type) {
        case mutations.FETCH_BANDS_SUCCESS:
          return action.bands;
          
        case mutations.CREATE_BAND:
          return [
            ...bands,
            {
              id: action.id,
              owner: action.owner,
              name: action.name,
              score: 0,
              flags: 0,
            },
          ];

        case mutations.MODIFY_BAND_SCORE:
          if (action.status === mutations.AUTHENTICATED) {
            let bandsCopy = [...bands];
            let targetBandIndex = bandsCopy.findIndex(
              (band) => band.id === action.bandID
            );
            let targetBand = bandsCopy.splice(targetBandIndex, 1)[0];
            targetBand.score = targetBand.score + action.value;
            bandsCopy.splice(targetBandIndex, 0, targetBand);
            return bandsCopy;
          } else {
            return bands;
          }

          default:
            return bands;
      }
    },
    users(users = defaultState.users, action) {
      return users;
    },
  }),
  applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}

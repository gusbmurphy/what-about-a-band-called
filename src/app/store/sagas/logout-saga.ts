import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import * as paths from "../../../server/paths";
import { sessionActions } from "../slices/session-slice";

export function* logoutSaga() {
  while (true) {
    yield take(sessionActions.requestLogout.type);
    try {
      yield call(
        axios.delete,
        paths.serverUrl + paths.sessionEndpoint, {withCredentials: true}
      );
      yield put(sessionActions.logoutSuccess());
    } catch (err) {
      yield put(sessionActions.logoutFailure());
    }
  }
}
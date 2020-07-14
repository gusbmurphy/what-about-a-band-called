import { take, put, call } from "redux-saga/effects";
import axios from "axios";
import * as actionTypes from "../actions/types";
import * as paths from "../../../server/paths";
import { sessionActions } from "../slices/session-slice";

export function* userAuthenticationSaga() {
  while (true) {
    let { payload } = yield take(sessionActions.requestAuthenticateUser.type);
    let { username, password } = payload;
    try {
      let response = yield call(
        axios.post,
        paths.serverUrl + paths.authenticate,
        {
          username,
          password,
        }
      );
      let { userId, bandsModified } = response.data;
      if (response.status == 200) {
        yield put(
          sessionActions.authenticateUserSuccess({
            userId,
            username,
            bandsModified,
          })
        );
      }
    } catch (err) {
      yield put(
        sessionActions.authenticateUserFailure({
          reason: err.response.data.reason,
        })
      );
    }
  }
}

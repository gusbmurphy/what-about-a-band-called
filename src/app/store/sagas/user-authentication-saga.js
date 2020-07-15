import axios from "axios";
import { call, put, take } from "redux-saga/effects";
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
      if (err.response) {
        yield put(
          sessionActions.authenticateUserFailure({
            reason: err.response.data.reason,
          })
        );
      } else {
        console.error(err)
      }
    }
  }
}

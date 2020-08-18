import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import * as paths from "../../../server/paths";
import { sessionActions } from "../slices/session-slice";
import { SagaIterator } from "redux-saga";

export function* userAuthenticationSaga() {
  while (true) {
    const { payload } = yield take(sessionActions.requestAuthenticateUser.type);
    const { username, password } = payload;
    try {
      const response = yield call(
        axios.post,
        paths.serverUrl + paths.authenticate,
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      const { userId, bandsModified } = response.data;
      // console.log("bandsModified in userAuthenticationSaga: ", bandsModified);
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

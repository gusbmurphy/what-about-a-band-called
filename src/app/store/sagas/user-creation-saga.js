import { take, put, call } from "redux-saga/effects";
import axios from "axios";
import * as paths from "../../../server/paths";
import { sessionActions } from "../slices/session-slice";

export function* userCreationSaga() {
  while (true) {
    let { payload } = yield take(sessionActions.requestCreateUser.type);
    let { username, password } = payload;
    try {
      let response = yield call(
        axios.post,
        paths.serverUrl + paths.createUser,
        {
          username,
          password,
        }
      );
      if (response.status == 200) {
        yield put(sessionActions.createUserSuccess());
      }
    } catch (error) {
      yield put(
        sessionActions.createUserFailure({ reason: error.response.data.reason })
      );
    }
  }
}

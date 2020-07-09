import { take, put, call } from "redux-saga/effects";
import axios from "axios";
import * as actionCreators from "../action-creators";
import * as actionTypes from "../action-types";
import * as paths from "../../../server/paths";

export function* userAuthenticationSaga() {
  while (true) {
    let { username, password } = yield take(
      actionTypes.AUTHENTICATE_USER_BEGIN
    );
    try {
      let response = yield call(
        axios.post,
        paths.serverUrl + paths.authenticate,
        {
          username,
          password,
        }
      );
      if (response.status == 200) {
        yield put(
          actionCreators.authenticateUserSuccess(
            response.data.userId,
            response.data.username,
            response.data.bandsModified
          )
        );
      }
    } catch (err) {
      yield put(
        actionCreators.authenticateUserFailure(err.response.data.reason)
      );
    }
  }
}

import { take, put, call } from "redux-saga/effects";
import axios from "axios";
import * as actionCreators from "../action-creators";
import * as actionTypes from "../action-types";
import * as paths from "../../../server/paths";

export function* userCreationSaga() {
  while (true) {
    let { username, password } = yield take(actionTypes.CREATE_USER_BEGIN);
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
        yield put(actionCreators.createUserSuccess());
      }
    } catch (error) {
      yield put(actionCreators.createUserFailure(error.response.data.reason));
    }
  }
}

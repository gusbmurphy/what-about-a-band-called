import { take, put, call } from "redux-saga/effects";
import axios from "axios";
import * as actionCreators from "../action-creators";
import * as actionTypes from "../action-types";
import * as paths from "../../../server/paths";

export function* userCreationSaga() {
  while (true) {
    let { username, password } = yield take(actionTypes.CREATE_USER_BEGIN);
    let response = yield call(axios.post, paths.serverUrl + paths.createUser, {
      username,
      password,
    });
    try {
      if (response.status != 200)
        throw new Error();
      yield put(actionCreators.createUserSuccess());
    }
    catch (error) {
      yield put(actionCreators.createUserFailure(response.data.reason));
    }
  }
}

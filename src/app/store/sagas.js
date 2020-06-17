import { take, put, select } from "redux-saga/effects";
import { v1 as uuid } from "uuid";
import axios from "axios";

import * as actionCreators from "./action-creators";
import * as actions from "./action-types";

const url = "http://localhost:7777";

export function* fetchBandsSaga() {
  while (true) {
    yield take(actions.FETCH_BANDS_BEGIN);
    try {
      let response = yield axios.get(url + "/bands/get");
      if (response.status != 200) throw new Error();
      yield put(actionCreators.fetchBandsSuccess(response.data));
    } catch {
      yield put(actionCreators.fetchBandsFailure());
    }
  }
}

export function* bandCreationSaga() {
  while (true) {
    let { creatingUserId, bandName } = yield take(actions.CREATE_BAND_BEGIN);
    let newBand = {
      creatingUserId,
      bandName,
    };
    try {
      let response = yield axios.post(url + "/band/new", newBand);
      if (response.status != 200) throw new Error();
      yield put(actionCreators.bandCreationSuccess(newBand));
    } catch {
      yield put(actionCreators.bandCreationFailure());
    }
  }
}

export function* bandScoreModificationSaga() {
  while (true) {
    let { targetBandId, modifyingUserId, modificationValue } = yield take(
      actions.MODIFY_BAND_SCORE_BEGIN
    );
    try {
      let response = yield axios.post(url + "/band/modify", {
        targetBandId,
        modifyingUserId,
        modificationValue,
      });
      if (response.status != 200) throw new Error();
      yield put(actionCreators.modifyBandScoreSuccess(targetBandId, modificationValue));
    } catch {
      yield put(actionCreators.modifyBandScoreFailure());
    }
  }
}

export function* userAuthenticationSaga() {
  while (true) {
    let { username, password } = yield take(actions.AUTHENTICATE_USER_BEGIN);
    try {
      let response = yield axios.post(url + "/authenticate", {
        username,
        password,
      });
      if (response.status != 200) throw new Error();
      yield put(actionCreators.authenticateUserSuccess(response.data.userId));
    } catch {
      yield put(actionCreators.authenticateUserFailure());
    }
  }
}
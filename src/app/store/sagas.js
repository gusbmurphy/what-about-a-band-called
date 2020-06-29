import { take, put, call } from "redux-saga/effects";
import axios from "axios";

import * as actionCreators from "./action-creators";
import * as actionTypes from "./action-types";

const url = "http://localhost:7777";

export function* bandFetchingSaga() {
  while (true) {
    yield take(actionTypes.FETCH_BANDS_BEGIN);
    try {
      let response = yield call(axios.get, url + "/bands/get");
      if (response.status != 200) throw new Error();
      yield put(actionCreators.fetchBandsSuccess(response.data));
    } catch(error) {
      yield put(actionCreators.fetchBandsFailure());
    }
  }
}

export function* bandCreationSaga() {
  while (true) {
    let { creatingUserId, bandName } = yield take(actionTypes.CREATE_BAND_BEGIN);
    let newBand = {
      creatingUserId,
      bandName,
    };
    try {
      let response = yield call(axios.post, url + "/band/new", newBand);
      if (response.status != 200) throw new Error();
      // TODO: This shouldn't take a new band, but just the _id returned from the server
      yield put(actionCreators.bandCreationSuccess(newBand));
    } catch(error) {
      yield put(actionCreators.bandCreationFailure());
    }
  }
}

export function* bandScoreModificationSaga() {
  while (true) {
    let { targetBandId, modifyingUserId, modificationValue } = yield take(
      actionTypes.MODIFY_BAND_SCORE_BEGIN
    );
    try {
      let response = yield call(axios.post, url + "/band/modify", {
        targetBandId,
        modifyingUserId,
        modificationValue,
      });
      if (response.status != 200) throw new Error();
      yield put(
        actionCreators.modifyBandScoreSuccess(targetBandId, modificationValue)
      );
    } catch(error) {
      yield put(actionCreators.modifyBandScoreFailure());
    }
  }
}

export function* userAuthenticationSaga() {
  while (true) {
    let { username, password } = yield take(actionTypes.AUTHENTICATE_USER_BEGIN);
    try {
      let response = yield call(axios.post, url + "/authenticate", {
        username,
        password,
      });
      if (response.status != 200) throw new Error();
      yield put(actionCreators.authenticateUserSuccess(response.data.userId));
    } catch(error) {
      yield put(actionCreators.authenticateUserFailure());
    }
  }
}

export function* userCreationSaga() {
  while (true) {
    let { username, password } = yield take(actionTypes.CREATE_USER_BEGIN);
    try {
      let response = yield call(axios.post, url + "/create-user", {
        username,
        password,
      });
      if (response.status != 200) throw new Error();
      yield put(actionCreators.createUserSuccess());
    } catch(error) {
      yield put(actionCreators.createUserFailure(response.data.reason));
    }
  }
}

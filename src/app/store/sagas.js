import { take, put, call } from "redux-saga/effects";
import axios from "axios";

import * as actionCreators from "./action-creators";
import * as actionTypes from "./action-types";

import * as paths from "../../server/paths";

export function* bandFetchingSaga() {
  while (true) {
    yield take(actionTypes.FETCH_BANDS_BEGIN);
    try {
      let response = yield call(axios.get, paths.serverUrl + paths.getBands);
      if (response.status != 200) throw new Error();
      yield put(actionCreators.fetchBandsSuccess(response.data));
    } catch (error) {
      yield put(actionCreators.fetchBandsFailure());
    }
  }
}

export function* bandCreationSaga() {
  while (true) {
    let { creatingUserId, bandName } = yield take(
      actionTypes.CREATE_BAND_BEGIN
    );
    let newBand = {
      creatingUserId,
      bandName,
    };
    let response = yield call(
      axios.post,
      paths.serverUrl + paths.newBand,
      newBand
    );
    try {
      if (response.status != 200) throw new Error();
      newBand._id = response.newBandId;
      newBand.score = 0;
      yield put(actionCreators.bandCreationSuccess(newBand));
    } catch (error) {
      yield put(actionCreators.bandCreationFailure(response.data.reason));
    }
  }
}

export function* bandScoreModificationSaga() {
  while (true) {
    let { targetBandId, modifyingUserId, modificationValue } = yield take(
      actionTypes.MODIFY_BAND_SCORE_BEGIN
    );
    let response = yield call(axios.post, paths.serverUrl + paths.modifyBand, {
      targetBandId,
      modifyingUserId,
      modificationValue,
    });
    try {
      if (response.status != 200) throw new Error();
      yield put(
        actionCreators.modifyBandScoreSuccess(targetBandId, modificationValue)
      );
    } catch (error) {
      yield put(actionCreators.modifyBandScoreFailure());
    }
  }
}

export function* userAuthenticationSaga() {
  while (true) {
    let { username, password } = yield take(
      actionTypes.AUTHENTICATE_USER_BEGIN
    );
    let response = yield call(
      axios.post,
      paths.serverUrl + paths.authenticate,
      {
        username,
        password,
      }
    );
    try {
      if (response.status != 200) throw new Error();
      yield put(actionCreators.authenticateUserSuccess(response.data.userId, response.data.username, response.data.bandsModified));
    } catch (error) {
      yield put(actionCreators.authenticateUserFailure());
    }
  }
}

export function* userCreationSaga() {
  while (true) {
    let { username, password } = yield take(actionTypes.CREATE_USER_BEGIN);
    let response = yield call(axios.post, paths.serverUrl + paths.createUser, {
      username,
      password,
    });
    try {
      if (response.status != 200) throw new Error();
      yield put(actionCreators.createUserSuccess());
    } catch (error) {
      yield put(actionCreators.createUserFailure(response.data.reason));
    }
  }
}

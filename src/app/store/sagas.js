import { take, put, select } from "redux-saga/effects";
import { v1 as uuid } from "uuid";
import axios from "axios";

import * as mutations from "./action-creators";
import * as actions from "./action-types";

const url = "http://localhost:7777";

export function* fetchBandsSaga() {
  while (true) {
    yield take(actions.FETCH_BANDS_BEGIN);

    try {
      let response = yield axios.get(url + "/bands/get");
      console.log("fetchBandsSaga got response: ", response);
      yield put(mutations.fetchBandsSuccess(response.data));
    } catch (e) {
      console.log(e);
    }
  }
}

export function* bandCreationSaga() {
  while (true) {
    let { creatingUserID, name } = yield take(actions.REQUEST_BAND_CREATION);
    let id = uuid();

    yield put(mutations.createBand(id, creatingUserID, name));

    let { res } = yield axios.post(url + "/band/new", {
      id: id,
      owner: creatingUserID,
      name,
      score: 0,
      flags: 0,
    });

    console.info("bandCreationSaga got response: ", res);
  }
}

export function* bandModificationSaga() {
  while (true) {
    let { bandID, modifyingUserID, value } = yield take(
      actions.REQUEST_MODIFY_BAND_SCORE
    );
    try {
      let response = yield axios.post(url + "/band/modify", {
        bandID,
        modifyingUserID,
        value,
      });

      if (response.status !== 200) {
        console.log("OOOPS");
        throw new Error();
      }
      yield put(
        mutations.processModifyBandScore(
          actions.AUTHENTICATED,
          bandID,
          modifyingUserID,
          value
        )
      );
    } catch (e) {
      console.log("ERROR in bandModificationSaga: ", e);
      yield put(mutations.processModifyBandScore(actions.NOT_AUTHENTICATED));
    }
  }
}

export function* userAuthenticationSaga() {
  while (true) {
    let { username, password } = yield take(
      actions.REQUEST_AUTHENTICATE_USER
    );
    try {
      let { data } = yield axios.post(url + "/authenticate", {
        username,
        password,
      });
      if (!data) {
        throw new Error();
      }
      let session = { userID: data.userID };
      yield put(
        mutations.processAuthenticateUser(actions.AUTHENTICATED, session)
      );
    } catch (e) {
      yield put(mutations.processAuthenticateUser(actions.NOT_AUTHENTICATED));
    }
  }
}

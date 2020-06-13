import { take, put, select } from "redux-saga/effects";
import { v1 as uuid } from "uuid";
import axios from "axios";

import * as mutations from "./mutations";

const url = "http://localhost:7777";

export function* bandCreationSaga() {
  while (true) {
    let { creatingUserID, name } = yield take(mutations.REQUEST_BAND_CREATION);
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

export function* userAuthenticationSaga() {
  while (true) {
    var {username, password} = yield take(mutations.REQUEST_AUTHENTICATE_USER);
    try {
      var { data } = yield axios.post(url + "/authenticate", { username, password });
      if (!data) {
        throw new Error();
      }
      console.log("Authenticated!", data);
    } catch (e) {
      console.log("Can't authenticate.");
      yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));
    }
  }
}
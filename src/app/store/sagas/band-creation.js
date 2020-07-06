import { take, put, call } from "redux-saga/effects";
import axios from "axios";
import * as actionCreators from "../action-creators";
import * as actionTypes from "../action-types";
import * as paths from "../../../server/paths";

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
      if (response.status != 200)
        throw new Error();
      newBand._id = response.newBandId;
      newBand.score = 0;
      yield put(actionCreators.bandCreationSuccess(newBand));
    }
    catch (error) {
      yield put(actionCreators.bandCreationFailure(response.data.reason));
    }
  }
}

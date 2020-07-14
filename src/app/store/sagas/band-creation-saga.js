import { take, put, call } from "redux-saga/effects";
import axios from "axios";
import * as actionCreators from "../actions/creators";
import * as actionTypes from "../actions/types";
import * as paths from "../../../server/paths";
import { bandActions } from "../slices/bands-slice";

export function* bandCreationSaga() {
  while (true) {
    let { payload } = yield take(bandActions.requestCreateBand.type);
    let { creatingUserId, bandName } = payload;
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
      let { _id, bandName, creatingUserId, score } = newBand;
      yield put(
        bandActions.createBandSuccess({ _id, bandName, creatingUserId, score })
      );
    } catch (error) {
      yield put(
        bandActions.createBandFailure({ reason: response.data.reason })
      );
    }
  }
}

import { take, put, call } from "redux-saga/effects";
import axios from "axios";
import * as actionCreators from "../action-creators";
import * as actionTypes from "../action-types";
import * as paths from "../../../server/paths";

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
      if (response.status != 200)
        throw new Error();
      yield put(
        actionCreators.modifyBandScoreSuccess(targetBandId, modificationValue)
      );
    }
    catch (error) {
      yield put(actionCreators.modifyBandScoreFailure());
    }
  }
}

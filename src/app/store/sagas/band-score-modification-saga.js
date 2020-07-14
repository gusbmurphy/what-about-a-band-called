import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import * as paths from "../../../server/paths";
import { bandActions } from "../slices/bands-slice";

export function* bandScoreModificationSaga() {
  while (true) {
    let { payload } = yield take(bandActions.requestModifyBandScore.type);
    let { targetBandId, modifyingUserId, modificationValue } = payload;
    let response = yield call(axios.post, paths.serverUrl + paths.modifyBand, {
      targetBandId,
      modifyingUserId,
      modificationValue,
    });
    try {
      if (response.status != 200) throw new Error();
      yield put(
        bandActions.modifyBandScoreSuccess({ targetBandId, modificationValue })
      );
    } catch (error) {
      yield put(bandActions.modifyBandScoreFailure());
    }
  }
}

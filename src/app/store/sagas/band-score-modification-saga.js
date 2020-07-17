import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import * as paths from "../../../server/paths";
import { bandActions } from "../slices/bands-slice";

export function* bandScoreModificationSaga() {
  while (true) {
    let { payload } = yield take(bandActions.requestModifyBandScore.type);
    let { targetBandId, modifyingUserId, modificationValue } = payload;
    try {
      let response = yield call(
        axios.post,
        paths.serverUrl + paths.modifyBand,
        {
          targetBandId,
          modifyingUserId,
          modificationValue,
        }
      );
      if (response.status != 200) console.log(response);
      console.log("bandScoreModificationSaga about to put success with: ", {
        targetBandId,
        modificationValue,
      });
      yield put(
        bandActions.modifyBandScoreSuccess({ targetBandId, modificationValue })
      );
    } catch (error) {
      yield put(bandActions.modifyBandScoreFailure());
    }
  }
}

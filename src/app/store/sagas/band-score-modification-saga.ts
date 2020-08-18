import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import * as paths from "../../../server/paths";
import { bandActions } from "../slices/bands-slice";
import { SagaIterator } from "redux-saga";

// TODO: This doesn't work right on the database side!

export function* bandScoreModificationSaga(): SagaIterator {
  while (true) {
    const { payload } = yield take(bandActions.requestModifyBandScore.type);
    const { targetBandId, modifyingUserId, modificationValue } = payload;
    try {
      // console.log("modification value in saga: ", modificationValue);
      const response = yield call(
        axios.post,
        paths.serverUrl + paths.modifyBand,
        {
          targetBandId,
          modifyingUserId,
          modificationValue,
        }
      );
      if (response.status != 200) throw new Error();
      if (modificationValue == 0) {
        yield put(
          bandActions.modifyBandScoreSuccess({
            targetBandId,
            modificationValue: -payload.undoValue,
          })
        );
      } else {
        yield put(
          bandActions.modifyBandScoreSuccess({
            targetBandId,
            modificationValue,
          })
        );
      }
    } catch (error) {
      yield put(bandActions.modifyBandScoreFailure());
    }
  }
}

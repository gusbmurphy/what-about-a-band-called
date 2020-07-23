import axios from "axios";
import { actionChannel, call, put, take } from "redux-saga/effects";
import * as paths from "../../../server/paths";
import { bandActions } from "../slices/bands-slice";
import { BandClass } from "../../../server/models/band-model";
import { SagaIterator } from "redux-saga";

export function* watchFetchBandsSaga(): SagaIterator {
  const fetchBandsChannel = yield actionChannel(
    bandActions.requestFetchBands.type
  );
  while (true) {
    const { payload } = yield take(fetchBandsChannel);
    const { maxBands, sortBy } = payload;
    yield call(fetchBands, maxBands, sortBy);
  }
}

export function* fetchBands(maxBands, sortBy) {
  let response;
  try {
    response = yield call(axios.post, paths.serverUrl + paths.postBands, {
      maxBands,
      sortBy,
    });
    if (response.status != 200) throw new Error();
    yield put(bandActions.fetchBandsSuccess(response.data));
  } catch (error) {
    yield put(bandActions.fetchBandsFailure());
  }
}

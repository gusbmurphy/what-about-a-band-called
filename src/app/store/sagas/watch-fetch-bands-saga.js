import { put, call, actionChannel, take } from "redux-saga/effects";
import axios from "axios";
import * as paths from "../../../server/paths";
import { bandActions } from "../slices/bands-slice";

export function* watchFetchBandsSaga() {
  let fetchBandsChannel = yield actionChannel(
    bandActions.requestFetchBands.type
  );
  while (true) {
    let { maxBands, sortBy } = yield take(fetchBandsChannel);
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
    yield put(bandActions.fetchBandsSuccess({ bands: response.data }));
  } catch (error) {
    yield put(bandActions.fetchBandsFailure());
  }
}

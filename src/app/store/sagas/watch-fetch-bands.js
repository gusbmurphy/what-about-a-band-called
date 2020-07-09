import { put, call, actionChannel, take } from "redux-saga/effects";
import axios from "axios";
import * as actionCreators from "../actions/creators";
import * as actionTypes from "../actions/types";
import * as paths from "../../../server/paths";

export function* watchFetchBandsSaga() {
  let fetchBandsChannel = yield actionChannel(actionTypes.REQUEST_FETCH_BANDS);
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
    yield put(actionCreators.fetchBandsSuccess(response.data));
  } catch (error) {
    yield put(actionCreators.fetchBandsFailure());
  }
}

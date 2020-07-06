import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as actionCreators from "../action-creators";
import * as actionTypes from "../action-types";
import * as paths from "../../../server/paths";

export function* watchFetchBandsSaga() {
  yield takeEvery(actionTypes.FETCH_BANDS_BEGIN, fetchBands);
  // yield fork(fetchBands, maxBands, sortBy)
}
function* fetchBands(action) {
  let { maxBands, sortBy } = action;
  let response;
  try {
    response = yield call(axios.post, paths.serverUrl + paths.postBands, {
      maxBands,
      sortBy,
    });
    if (response.status != 200)
      throw new Error();
    yield put(actionCreators.fetchBandsSuccess(response.data));
  }
  catch (error) {
    yield put(actionCreators.fetchBandsFailure());
  }
}

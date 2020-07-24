import axios from "axios";
import { actionChannel, call, put, take } from "redux-saga/effects";
import * as paths from "../../../server/paths";
import { userRecordsActions } from "../slices/user-records-slice";
import { SagaIterator } from "redux-saga";
import { UserRecordSortTypes } from "../../store/statuses";
import { UserRecordsRequestBody } from "../../../server/route-handlers/user-records";
import { bandActions } from "../slices/bands-slice";

export function* watchFetchUserRecordsSaga(): SagaIterator {
  const fetchUserRecordsChannel = yield actionChannel(
    userRecordsActions.requestFetchUserRecords.type
  );
  while (true) {
    const { payload } = yield take(fetchUserRecordsChannel);
    const { numOfRecords, sortType } = payload;
    yield call(fetchUserRecords, numOfRecords, sortType);
  }
}

export function* fetchUserRecords(
  maxRecords: number,
  sortBy: UserRecordSortTypes
) {
  try {
    const response = yield call(
      axios.post,
      paths.serverUrl + paths.getUserRecords,
      { numOfRecords: maxRecords, sortType: sortBy }
    );
    if (response.status != 200) throw new Error();
    yield put(userRecordsActions.fetchUserRecordsSuccess(response.data));
  } catch (error) {
    yield put(userRecordsActions.fetchUserRecordsFailure());
  }
}

import axios from "axios";
import { actionChannel, call, put, take } from "redux-saga/effects";
import * as paths from "../../../server/paths";
import { SagaIterator } from "redux-saga";
import { sessionActions } from "../slices/session-slice";

export function* checkSessionSaga(): SagaIterator {
  while (true) {
    yield take(sessionActions.requestCheckSession.type);
    try {
      const response = yield call(
        axios.get,
        paths.serverUrl + paths.sessionEndpoint,
        { withCredentials: true }
      );
      // console.log(response);
      if (response.status == 200) {
        const { userId, username, bandsModified } = response.data;
        yield put(
          sessionActions.checkSessionSuccess({
            userId,
            username,
            bandsModified,
          })
        );
      } else {
        yield put(sessionActions.checkSessionFailure());
      }
    } catch {
      yield put(sessionActions.checkSessionFailure());
    }
  }
}

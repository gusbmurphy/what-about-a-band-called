import { take, put, call } from "redux-saga/effects";
import axios from "axios";
import * as paths from "../../../server/paths";
import { Types as MongooseTypes } from "mongoose";
import { SagaIterator } from "redux-saga";
import { userProfileActions } from "../slices/user-profile-slice";
import { createGetUserProfileUrl } from "../../../server/paths";

export function* fetchProfileSaga(): SagaIterator {
  while (true) {
    const { payload } = yield take(
      userProfileActions.requestFetchUserProfile.type
    );
    console.log(payload);
    const targetId = payload.targetId;
    console.log(targetId);
    try {
      console.log(createGetUserProfileUrl(targetId));
      const response = yield call(
        axios.get,
        paths.serverUrl + createGetUserProfileUrl(targetId)
      );
      if (response.status == 200) {
        yield put(
          userProfileActions.fetchUserProfileSuccess({
            profile: response.data.profile,
          })
        );
      } else {
        yield put(userProfileActions.fetchUserProfileFailure());
      }
    } catch (err) {
      yield put(userProfileActions.fetchUserProfileFailure());
    }
  }
}

import { take, put, call } from "redux-saga/effects";
import axios from "axios";
import * as paths from "../../../server/paths";
import { bandActions } from "../slices/bands-slice";
import { NewBandRequestBody } from "../../../server/route-handlers/bands";
import { Types as MongooseTypes } from "mongoose";
import { BandClass } from "../../../server/models/band-model";
import { BandCreationStatuses } from "../statuses";
import { SagaIterator } from "redux-saga";

export function* bandCreationSaga() {
  while (true) {
    const { payload } = yield take(bandActions.requestCreateBand.type);
    console.log("Saga payload: ", payload)
    const { creatingUserId, bandName, creatingUsername } = payload;
    // let newBand = {
    //   creatingUserId,
    //   bandName,
    // };
    const requestBody: NewBandRequestBody = {
      bandName,
      ownerId: creatingUserId,
      ownerName: creatingUsername,
    };
    const response = yield call(
      axios.post,
      paths.serverUrl + paths.newBand,
      requestBody
    );
    try {
      if (response.status != 200) throw new Error();
      const newBand: BandClass = response.newBand;
      // let { _id, bandName, creatingUserId, score } = newBand;
      // let newBand: BandClass = {
      //   name: bandName,
      //   ownerName: creatingUsername,
      //   ownerId: creatingUserId,
      //   score: 0,
      //   createdOn,
      //   _id: newBandId,
      // };
      yield put(bandActions.createBandSuccess(newBand));
    } catch (error) {
      const reason: BandCreationStatuses = response.data.reason;
      yield put(bandActions.createBandFailure(reason));
    }
  }
}

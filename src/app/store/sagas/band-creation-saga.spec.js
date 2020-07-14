import { cloneableGenerator } from "@redux-saga/testing-utils";
import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import * as paths from "../../../server/paths";
import { bandActions } from "../slices/bands-slice";
import { bandCreationSaga } from "./band-creation-saga";

describe.only("Band Creation Saga", function () {
  let generator = cloneableGenerator(bandCreationSaga)();

  it("waits for a CREATE_BAND_BEGIN action", function () {
    generator
      .next()
      .value.should.deep.equal(take(bandActions.requestCreateBand.type));
  });

  let creatingUserId = "userId1";
  let bandName = "bandName1";

  it("yields a call to the new band route with the info from the CREATE_BAND_BEGIN action", function () {
    generator
      .next({ payload: { creatingUserId, bandName } })
      .value.should.deep.equal(
        call(axios.post, paths.serverUrl + paths.newBand, {
          creatingUserId,
          bandName,
        })
      );
  });

  let newBandId = "bandId1";

  it("if the response status is 200, yields a successful band creation action with the new band info and the id returned from the post call", function () {
    let clone = generator.clone();
    clone.next({ status: 200, newBandId }).value.should.deep.equal(
      put(
        bandActions.createBandSuccess({
          creatingUserId,
          bandName,
          _id: newBandId,
          score: 0,
        })
      )
    );
  });

  it("if the response status is not 200, puts a band creation failure action with the reason", function () {
    let clone = generator.clone();
    let reason = "reason";
    clone
      .next({
        status: 500,
        data: { reason },
      })
      .value.should.deep.equal(put(bandActions.createBandFailure({ reason })));
  });
});

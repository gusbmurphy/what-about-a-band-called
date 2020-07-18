import { cloneableGenerator } from "@redux-saga/testing-utils";
import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import * as paths from "../../../server/paths";
import { bandActions } from "../slices/bands-slice";
import { bandScoreModificationSaga } from "./band-score-modification-saga";

describe("Band Score Modification Saga", function () {
  let generator = cloneableGenerator(bandScoreModificationSaga)();

  it("waits for a request to modify a band's score action", function () {
    generator
      .next()
      .value.should.deep.equal(take(bandActions.requestModifyBandScore.type));
  });

  let targetBandId = "bandId1";
  let modifyingUserId = "userId1";
  let modificationValue = 1;

  it("yields a call effect to post to the band modification route with the info from the begin action", function () {
    generator
      .next({
        payload: {
          targetBandId,
          modifyingUserId,
          modificationValue,
        },
      })
      .value.should.deep.equal(
        call(axios.post, paths.serverUrl + paths.modifyBand, {
          targetBandId,
          modifyingUserId,
          modificationValue,
        })
      );
  });

  it("if the response status is 200, it yields a put effect that the band score modification was successful", function () {
    let clone = generator.clone();
    clone
      .next({ status: 200 })
      .value.should.deep.equal(
        put(
          bandActions.modifyBandScoreSuccess({targetBandId, modificationValue})
        )
      );
  });

  it("if the response code was not 200, it puts a failure action", function () {
    let clone = generator.clone();
    clone
      .next({ status: 500 })
      .value.should.deep.equal(put(bandActions.modifyBandScoreFailure()));
  });

  let zeroGenerator = cloneableGenerator(bandScoreModificationSaga)();
  let undoValue = 1;

  it("if the response code was 200 and the modification value was 0, the success action should have a modification value opposite to the request's 'undoValue'", function () {
    zeroGenerator.next(); // Wait for request
    zeroGenerator.next({payload: {
      targetBandId,
      modifyingUserId,
      modificationValue: 0,
      undoValue
    }});
    zeroGenerator.next({ status: 200 }).value.should.deep.equal(
      put(bandActions.modifyBandScoreSuccess({targetBandId, modificationValue: -undoValue}))
    );
  })
});

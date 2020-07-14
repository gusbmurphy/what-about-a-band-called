import { cloneableGenerator } from "@redux-saga/testing-utils";
import axios from "axios";
import { channel } from "redux-saga";
import { actionChannel, call, put, take } from "redux-saga/effects";
import * as paths from "../../../server/paths";
import { bandActions } from "../slices/bands-slice";
import { fetchBands, watchFetchBandsSaga } from "./watch-fetch-bands-saga";

describe.only("Band Fetching Saga", function () {
  let generator = cloneableGenerator(watchFetchBandsSaga)();

  it("creates an action channel for band fetch request actions", function () {
    generator
      .next()
      .value.should.deep.equal(
        actionChannel(bandActions.requestFetchBands.type)
      );
  });

  it("passes the maximum bands and sort type from a request into the fetch bands generator", function () {
    let maxBands = 30;
    let sortBy = "SORTING_TYPE";
    let mockChannel = channel();
    generator.next(mockChannel).value.should.deep.equal(take(mockChannel));
    generator
      .next({ maxBands, sortBy })
      .value.should.deep.equal(call(fetchBands, maxBands, sortBy));
  });

  describe("Fetch Bands Generator", function () {
    let maxBands = 30;
    let sortBy = "SORTING_TYPE";
    let generator = cloneableGenerator(fetchBands)(maxBands, sortBy);

    it("yields a call Effect to get bands with the provided requirements", function () {
      generator.next().value.should.deep.equal(
        call(axios.post, paths.serverUrl + paths.postBands, {
          maxBands,
          sortBy,
        })
      );
    });
    it("dispatches a fetch bands success action with the retrieved bands if the response status is 200", function () {
      let clone = generator.clone();
      let data = "data";
      clone
        .next({ status: 200, data })
        .value.should.deep.equal(
          put(bandActions.fetchBandsSuccess({ bands: data }))
        );
    });
    it("dispatches a fetch bands failure action if the response is not 500", function () {
      let clone = generator.clone();
      clone
        .next({ status: 500 })
        .value.should.deep.equal(put(bandActions.fetchBandsFailure()));
    });
  });
});

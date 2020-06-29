import "chai/register-should";
import { cloneableGenerator } from "@redux-saga/testing-utils";
import { take, put, call } from "redux-saga/effects";
import axios from "axios";

import * as sagas from "./sagas";
import { serverUrl } from "./sagas";
import * as actionCreators from "./action-creators";
import * as actionTypes from "./action-types";

describe("Redux Saga Unit Tests", function () {

  describe("Band Fetching Saga", function () {
    let generator = cloneableGenerator(sagas.bandFetchingSaga)();

    it("should wait for a FETCH_BANDS_BEGIN action", function () {
      generator
        .next()
        .value.should.deep.equal(take(actionTypes.FETCH_BANDS_BEGIN));
    });

    it("should yield a call Effect to the get bands url", function () {
      generator
        .next()
        .value.should.deep.equal(call(axios.get, serverUrl + "/bands/get"));
    });

    it("should dispatch a FETCH_BANDS_FAILURE action if the server response code is not 200", function () {
      let clone = generator.clone();
      clone
        .next({ status: 500 })
        .value.should.deep.equal(put(actionCreators.fetchBandsFailure()));
    });

    it("should dispatch a fetch bands success action with the retrieved bands if there was no server error", function () {
      let clone = generator.clone();
      let fakeBands = "FAKEBANDS";
      clone
        .next({ status: 200, data: fakeBands })
        .value.should.deep.equal(put(actionCreators.fetchBandsSuccess(fakeBands)));
    });
  });
});

import "chai/register-should";
import sinon from "sinon";
import configureStore from "redux-mock-store";
import { cloneableGenerator } from "@redux-saga/testing-utils";
import { take, put, call } from "redux-saga/effects";
import axios from "axios";

import * as sagas from "./sagas";
import * as actionCreators from "./action-creators";
import * as actionTypes from "./action-types";

let mockStore;
let store;

describe("Redux Saga Unit Tests", function () {
  afterEach(function () {
    // mockStore = configureStore(sagas);
    // sinon.restore();
  });

  describe("Band Fetching Saga", function () {
    let generator;

    it("should wait for a FETCH_BANDS_BEGIN action", function () {
      generator = cloneableGenerator(sagas.bandFetchingSaga)();
      generator
        .next()
        .value.should.deep.equal(take(actionTypes.FETCH_BANDS_BEGIN));
    });

    it("should dispatch a FETCH_BANDS_FAILURE action if the server response code is not 200", function () {
      let clone = generator.clone();
      clone.next(); // Wait for the server response
      clone
        .next()
        .value.should.deep.equal(put(actionCreators.fetchBandsFailure()));
    });

    it.skip("should dispatch a fetch bands success action if there was no server error", function () {
      let responseData = "DATA";
      let getStub = sinon.stub(axios, "get");
      getStub.resolves({ status: 200 });

      let generator = sagas.bandFetchingSaga();
      generator
        .next()
        .value.should.deep.equal(take(actionTypes.FETCH_BANDS_BEGIN));
      generator.next(); // Wait for the server response
      generator
        .next()
        .value.should.deep.equal(
          put(actionCreators.fetchBandsSuccess(responseData))
        );
    });
  });
});

import "chai/register-should";

import * as reducers from "./reducers";
import * as actionTypes from "./action-types";
import { ObjectId } from "mongodb";

describe("Store Reducer Unit Tests", function () {
  describe("Session Reducer", function () {
    describe("Authentication", function () {
      let state;

      it("has a default state where authentication status us 'NOT_TRYING' and userId is null", function () {
        state = reducers.session(undefined, {});
        state.should.haveOwnProperty(
          "authenticationStatus",
          actionTypes.AuthenticationStatuses.NOT_TRYING
        );
        state.should.haveOwnProperty("userId", null);
        state.should.haveOwnProperty(
          "userCreationStatus",
          actionTypes.UserCreationStatuses.NOT_TRYING
        );
      });

      let userId = "userId1";
      let username = "username";
      let bandsModified = ["band1", "band2"];

      it("changes the authentication status, username, bands modified, and user id appropriately when recieving authentication begin and success actions", function () {
        state = reducers.session(state, {
          type: actionTypes.AUTHENTICATE_USER_BEGIN,
        });
        state.authenticationStatus.should.equal(
          actionTypes.AuthenticationStatuses.AUTHENTICATING,
          "status should be AUTHENTICATING after recieving begin action"
        );

        // state = reducers.session(state, {
        //   type: actionTypes.AUTHENTICATE_USER_SUCCESS,
        //   userId,
        //   username,
        //   bandsModified,
        // });
        // state.authenticationStatus.should.equal(
        //   actionTypes.AuthenticationStatuses.AUTHENTICATED,
        //   "status should be AUTHENTICATED after recieving success action"
        // );

        state.should.haveOwnProperty("userId", userId);
        state.should.haveOwnProperty("username", username);
        state.should.haveOwnProperty("bandsModified", bandsModified);
      });

      it("sets authentication status to be reason of failure, and does not have a user id in the state when a authentication failure action is recieved", function () {
        let reason = "reason1";
        state = reducers.session(state, {
          type: actionTypes.AUTHENTICATE_USER_FAILURE,
          reason,
        });

        state.should.haveOwnProperty(
          "userId",
          null,
          "userId property should be null"
        );

        state.should.haveOwnProperty(
          "authenticationStatus",
          reason,
          "authentication status should be set to the reason of the failure"
        );
      });
    });

    describe("Account Creation", function () {
      let state;

      it("begins with a default state where the user creation status is NOT_TRYING", function () {
        state = reducers.session(undefined, {});
        state.should.haveOwnProperty(
          "userCreationStatus",
          actionTypes.UserCreationStatuses.NOT_TRYING
        );
      });

      it("sets status to PROCESSING when an action type of CREATE_USER_BEGIN is recieved", function () {
        state = reducers.session(state, {
          type: actionTypes.CREATE_USER_BEGIN,
        });
        state.should.haveOwnProperty(
          "userCreationStatus",
          actionTypes.UserCreationStatuses.PROCESSING
        );
      });

      it("sets status to the action's delivered reason when creation fails", function () {
        let reason = "reason";
        state = reducers.session(state, {
          type: actionTypes.CREATE_USER_FAILURE,
          reason,
        });
        state.should.haveOwnProperty("userCreationStatus", reason);
      });

      it("sets status to SUCCESS if the creation succeeds", function () {
        state = reducers.session(state, {
          type: actionTypes.CREATE_USER_SUCCESS,
        });
        state.should.haveOwnProperty(
          "userCreationStatus",
          actionTypes.UserCreationStatuses.SUCCESS
        );
      });
    });

    describe.only("Band Modifications", function () {
      it("adds a new entry to the bands modified when there's been a successful band modification action dispatched to the store", function () {
        let modifiedBandId = "bandId";
        let modificationValue = 1;
        let state = reducers.session(undefined, {
          type: actionTypes.MODIFY_BAND_SCORE_SUCCESS,
          modifiedBandId,
          modificationValue,
        });

        state.should.haveOwnProperty("bandsModified");
        state.bandsModified.some(
          (modification) =>
            modification.targetBandId == modifiedBandId &&
            modification.value == modificationValue
        ).should.be.true;
      });
    });
  });

  describe("Bands Reducer", function () {
    describe("Band Fetching", function () {
      let state;

      it("starts with state with an empty array for items, and a pending fetches value of 0", function () {
        state = reducers.bands(undefined, {});
        state.should.haveOwnProperty("pendingFetches", 0);
        state.should.haveOwnProperty("items");
        state.items.should.have.lengthOf(0);
      });

      it("increments the amount of pending fetches when a REQUEST_FETCH_BANDS action is recieved", function () {
        state = reducers.bands(undefined, {
          type: actionTypes.REQUEST_FETCH_BANDS,
        });
        state.pendingFetches.should.equal(1);
      });

      let firstBands = [];
      for (let i = 0; i < 3; i++) {
        firstBands.push({ _id: new ObjectId() });
      }

      let secondBands = [];
      for (let i = 0; i < 3; i++) {
        secondBands.push({ _id: new ObjectId() });
      }

      it("adds the recieved bands to the existing array once they're recieved", function () {
        state = reducers.bands(
          { items: firstBands },
          { type: actionTypes.FETCH_BANDS_SUCCESS, bands: secondBands }
        );

        state.items.should.deep.include.members(
          firstBands,
          "the items array should still have the bands it started with"
        );
        state.items.should.deep.include.members(
          secondBands,
          "the items array should have the new bands in it"
        );
      });

      it("does not add objects with duplicate ObjectIds to the array", function () {
        let moreNewBands = [];
        for (let i = 0; i < 3; i++) {
          moreNewBands.push({ _id: new ObjectId() });
        }
        let duplicateBands = [...firstBands];

        state = reducers.bands(
          { items: firstBands },
          {
            type: actionTypes.FETCH_BANDS_SUCCESS,
            bands: [...moreNewBands, ...duplicateBands],
          }
        );

        state.items.should.deep.include.members(
          moreNewBands,
          "it should correctly add non-duplicate bands"
        );

        let hasDuplicateEntries = false;
        let countedEntries = [];
        for (let i = 0; i < state.items.length && !hasDuplicateEntries; i++) {
          let entry = state.items[i];
          if (countedEntries.some((band) => band._id == entry._id))
            hasDuplicateEntries = true;
          else countedEntries.push(entry);
        }

        hasDuplicateEntries.should.be.false;
      });

      it("decrements the pending fetches when a fetch succeeds", function () {
        state = reducers.bands(
          { pendingFetches: 1, items: [] },
          { type: actionTypes.FETCH_BANDS_SUCCESS, bands: [] }
        );
        state.pendingFetches.should.equal(0);
      });

      it("decrements the amount of pending fetches when a fetch fails", function () {
        state = reducers.bands(
          { pendingFetches: 1 },
          { type: actionTypes.FETCH_BANDS_FAILURE }
        );
        state.pendingFetches.should.equal(0);
      });
    });

    describe("Band Creation", function () {
      let state;

      it("by default the state has a creation status of NOT_TRYING", function () {
        state = reducers.bands(undefined, {});
        state.should.haveOwnProperty(
          "creationStatus",
          actionTypes.BandCreationStatuses.NOT_TRYING
        );
      });

      it("should set the creation status to CREATING when a CREATE_BAND_BEGIN action is recieved", function () {
        state = reducers.bands(state, { type: actionTypes.CREATE_BAND_BEGIN });
        state.creationStatus.should.equal(
          actionTypes.BandCreationStatuses.CREATING
        );
      });

      let newBand = "newBand1";

      it("should set the creation status to CREATED on a success", function () {
        state = reducers.bands(state, {
          type: actionTypes.CREATE_BAND_SUCCESS,
          newBand,
        });
        state.creationStatus.should.equal(
          actionTypes.BandCreationStatuses.CREATED
        );
      });

      it("should add the new band to the state's items on a success", function () {
        state.items.should.include(newBand);
      });

      it("should set the creation status to the reason for failure on a failure", function () {
        let reason = "failure";
        state = reducers.bands(state, {
          type: actionTypes.CREATE_BAND_FAILURE,
          reason,
        });
        state.creationStatus.should.equal(reason);
      });
    });

    describe("Score Modification", function () {
      let store;
      let targetBandId = "bandId1";
      let bandScore = 1;
      let targetBand = {
        _id: targetBandId,
        name: "bandName1",
        score: bandScore,
      };

      it("has a default state with an object with status set to NOT_TRYING and a target of null", function () {
        store = reducers.bands(undefined, {});
        store.should.haveOwnProperty("scoreModification");
        store.scoreModification.should.haveOwnProperty(
          "status",
          actionTypes.BandScoreModificationStatuses.NOT_TRYING
        );
        store.scoreModification.should.haveOwnProperty("target", null);
      });

      it("sets the status to ATTEMPTING and the target correctly when a MODIFY_BAND_SCORE_BEGIN action is recieved", function () {
        store = reducers.bands(store, {
          type: actionTypes.MODIFY_BAND_SCORE_BEGIN,
          target: targetBandId,
        });
        store.scoreModification.status.should.equal(
          actionTypes.BandScoreModificationStatuses.ATTEMPTING
        );
        store.scoreModification.target.should.equal(targetBandId);
      });

      it("sets the status to SUCCESS and correctly updates the band in the store when the modification is successful", function () {
        let modificationValue = -1;
        let originalBand = Object.assign({}, targetBand);
        let modifiedBand = Object.assign({}, targetBand);
        modifiedBand.score += modificationValue;

        store = reducers.bands(
          {
            items: [targetBand],
          },
          {
            type: actionTypes.MODIFY_BAND_SCORE_SUCCESS,
            modifiedBandId: targetBandId,
            modificationValue,
          }
        );

        store.scoreModification.status.should.equal(
          actionTypes.BandScoreModificationStatuses.SUCCESS
        );
        store.items.should.have.deep.members(
          [modifiedBand],
          "the store should contain the modified version of the band"
        );
        store.items.should.not.have.deep.members(
          [originalBand],
          "the store shouldn't contain the original version of the band"
        );
      });
    });
  });
});

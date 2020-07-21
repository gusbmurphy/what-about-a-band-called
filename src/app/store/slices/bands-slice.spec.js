import { ObjectId } from "mongodb";
import bandsReducer, { bandActions } from "./bands-slice";
import { BandCreationStatuses, BandScoreModificationStatuses } from "../statuses";


describe("Bands Slice", function () {
  describe("Band Fetching", function () {
    let state;

    it("starts with state with an empty array for items, and a pending fetches value of 0", function () {
      state = bandsReducer(undefined, {});
      state.should.haveOwnProperty("pendingFetches", 0);
      state.should.haveOwnProperty("items");
      state.items.should.have.lengthOf(0);
    });

    it("increments the amount of pending fetches when a request fetch bands action is recieved", function () {
      state = bandsReducer(undefined, {
        type: bandActions.requestFetchBands.type,
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
      state = bandsReducer(
        { items: firstBands },
        { type: bandActions.fetchBandsSuccess, payload: { bands: secondBands } }
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

      state = bandsReducer(
        { items: firstBands },
        {
          type: bandActions.fetchBandsSuccess.type,
          payload: { bands: [...moreNewBands, ...duplicateBands] },
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
      state = bandsReducer(
        { pendingFetches: 1, items: [] },
        { type: bandActions.fetchBandsSuccess.type, payload: { bands: [] } }
      );
      state.pendingFetches.should.equal(0);
    });

    it("decrements the amount of pending fetches when a fetch fails", function () {
      state = bandsReducer(
        { pendingFetches: 1 },
        { type: bandActions.fetchBandsFailure.type }
      );
      state.pendingFetches.should.equal(0);
    });
  });

  describe("Band Creation", function () {
    let state;

    it("by default the state has a creation status of not trying", function () {
      state = bandsReducer(undefined, {});
      state.should.haveOwnProperty(
        "creationStatus",
        BandCreationStatuses.NOT_TRYING
      );
    });

    it("should set the creation status to creating when a request to a create band is recieved", function () {
      state = bandsReducer(state, { type: bandActions.requestCreateBand.type });
      state.creationStatus.should.equal(
        BandCreationStatuses.CREATING
      );
    });

    let newBand = "newBand1";

    it("should set the creation status to created on a success", function () {
      state = bandsReducer(state, {
        type: bandActions.createBandSuccess.type,
        payload: { newBand },
      });
      state.creationStatus.should.equal(
        BandCreationStatuses.CREATED
      );
    });

    it("should add the new band to the state's items on a success", function () {
      state.items.should.include(newBand);
    });

    it("should set the creation status to the reason for failure on a failure", function () {
      let reason = "failure";
      state = bandsReducer(state, {
        type: bandActions.createBandFailure.type,
        payload: { reason },
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

    it("has a default state with an object with status set to not trying and a target of null", function () {
      store = bandsReducer(undefined, {});
      store.should.haveOwnProperty("scoreModification");
      store.scoreModificationState.should.haveOwnProperty(
        "status",
        BandScoreModificationStatuses.NOT_TRYING
      );
      store.scoreModificationState.should.haveOwnProperty("target", null);
    });

    it("sets the status to attempting and the target correctly when a request to modify band score action is recieved", function () {
      store = bandsReducer(store, {
        type: bandActions.requestModifyBandScore.type,
        payload: { target: targetBandId },
      });
      store.scoreModificationState.status.should.equal(
        BandScoreModificationStatuses.ATTEMPTING
      );
      store.scoreModificationState.target.should.equal(targetBandId);
    });

    it("sets the status to success and correctly updates the band in the store when the modification is successful", function () {
      let modificationValue = -1;
      let originalBand = Object.assign({}, targetBand);
      let modifiedBand = Object.assign({}, targetBand);
      modifiedBand.score += modificationValue;

      store = bandsReducer(
        {
          items: [targetBand],
          scoreModificationState: {
            status: null,
            target: null,
          }
        },
        {
          type: bandActions.modifyBandScoreSuccess.type,
          payload: { targetBandId, modificationValue },
        }
      );

      store.scoreModificationState.status.should.equal(
        BandScoreModificationStatuses.SUCCESS
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

    it("undoes the user's modification if an action with a modification value of 0 is recieved")
  });
});

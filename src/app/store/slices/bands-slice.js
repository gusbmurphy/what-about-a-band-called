import { createSlice } from "@reduxjs/toolkit";
import {
  BandCreationStatuses,
  BandScoreModificationStatuses,
} from "../statuses";

const bandsSlice = createSlice({
  name: "bands",
  initialState: {
    pendingFetches: 0,
    items: [],
    creationStatus: BandCreationStatuses.NOT_TRYING,
    scoreModification: {
      status: BandScoreModificationStatuses.NOT_TRYING,
      target: null,
    },
  },
  reducers: {
    // Band fetching
    requestFetchBands(state) {
      state.pendingFetches++;
    },
    fetchBandsSuccess(state, action) {
      action.payload.bands.forEach((newBand) => {
        if (!state.items.some((band) => band._id == newBand._id))
          state.items.push(newBand);
      });
      state.pendingFetches--;
    },
    fetchBandsFailure(state) {
      state.pendingFetches--;
    },

    // Band creation
    requestCreateBand(state) {
      state.creationStatus = BandCreationStatuses.CREATING;
    },
    createBandSuccess(state, action) {
      state.creationStatus = BandCreationStatuses.CREATED;
      state.items.push(action.payload.newBand);
    },
    createBandFailure(state, action) {
      state.creationStatus = action.payload.reason;
    },

    // Modify band score
    requestModifyBandScore(state, action) {
      state.scoreModification.status = BandScoreModificationStatuses.ATTEMPTING;
      state.scoreModification.target = action.payload.target;
    },
    modifyBandScoreSuccess(state, action) {
      let targetBandIndex = state.items.findIndex(
        (band) => band._id === action.payload.targetBandId
      );
      state.items[targetBandIndex].score += action.payload.modificationValue;
      state.scoreModification.status = BandScoreModificationStatuses.SUCCESS
    },
    modifyBandScoreFailure(state) {
      // TODO: Shouldn't we be getting a reason for the failure here?
      state.scoreModification.state = BandScoreModificationStatuses.FAILURE;
      state.scoreModification.target = null;
    },

    // Cancel a band modificaiton
    // requestCancelBandModification(state, action) {
    //   state.scoreModification.status = BandScoreModificationStatuses.ATTEMPTING;
    //   state.scoreModification.target = action.payload.target;
    // },
    // cancelBandModificationSuccess(state, action) {
    //   let targetBandIndex = state.items.findIndex(
    //     (band) => band._id === action.payload.targetBandId
    //   );

    // }
  },
});

export const bandActions = bandsSlice.actions;
export default bandsSlice.reducer;
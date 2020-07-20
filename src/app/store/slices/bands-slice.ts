import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BandCreationStatuses,
  BandScoreModificationStatuses,
} from "../statuses";
import { BandProps, BandDoc } from "../../../server/models/band-model";

type ScoreModification = {
  status: BandScoreModificationStatuses;
  // TODO: This needs to refer to a band's ID
  target?: string;
}

type BandsSliceState = {
  pendingFetches: number;
  creationStatus: BandCreationStatuses;
  items: BandProps[];
  scoreModification: ScoreModification;
}

let initialState: BandsSliceState = {
  pendingFetches: 0,
  items: [],
  creationStatus: BandCreationStatuses.NOT_TRYING,
  scoreModification: {
    status: BandScoreModificationStatuses.NOT_TRYING
  }
}

const bandsSlice = createSlice({
  name: "bands",
  initialState,
  reducers: {
    // Band fetching
    requestFetchBands(state) {
      state.pendingFetches++;
    },
    fetchBandsSuccess(state, action: PayloadAction<BandProps>) {
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
      state.scoreModification.status = BandScoreModificationStatuses.SUCCESS;
    },
    modifyBandScoreFailure(state) {
      // TODO: Shouldn't we be getting a reason for the failure here?
      state.scoreModification.state = BandScoreModificationStatuses.FAILURE;
      state.scoreModification.target = null;
    },
  },
});

export const bandActions = bandsSlice.actions;
export default bandsSlice.reducer;

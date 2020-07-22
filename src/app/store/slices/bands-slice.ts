import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BandCreationStatuses,
  BandScoreModificationStatuses,
  BandSortTypes,
} from "../statuses";
import { BandClass } from "../../../server/models/band-model";
import { Types as MongooseTypes } from "mongoose";

type ScoreModificationState = {
  status: BandScoreModificationStatuses;
  // TODO: This needs to refer to a band's ID
  target?: MongooseTypes.ObjectId;
};

type BandsSliceState = {
  pendingFetches: number;
  creationStatus: BandCreationStatuses;
  items: BandClass[];
  scoreModificationState: ScoreModificationState;
};

const initialState: BandsSliceState = {
  pendingFetches: 0,
  items: [],
  creationStatus: BandCreationStatuses.NOT_TRYING,
  scoreModificationState: {
    status: BandScoreModificationStatuses.NOT_TRYING,
  },
};

const bandsSlice = createSlice({
  name: "bands",
  initialState,
  reducers: {
    // Band fetching
    requestFetchBands(
      state,
      action: PayloadAction<{
        maxBands: number;
        sortBy: BandSortTypes;
      }>
    ) {
      state.pendingFetches++;
    },
    fetchBandsSuccess(state, action: PayloadAction<BandClass[]>) {
      action.payload.forEach((newBand) => {
        if (!state.items.some((band) => band._id == newBand._id))
          state.items.push(newBand);
      });
      state.pendingFetches--;
    },
    fetchBandsFailure(state) {
      state.pendingFetches--;
    },

    // Band creation
    requestCreateBand(
      state,
      action: PayloadAction<{
        creatingUserId: MongooseTypes.ObjectId;
        bandName: string;
        creatingUsername: string;
      }>
    ) {
      state.creationStatus = BandCreationStatuses.CREATING;
    },
    createBandSuccess(state, action: PayloadAction<BandClass>) {
      state.creationStatus = BandCreationStatuses.CREATED;
      state.items.push(action.payload);
    },
    createBandFailure(state, action: PayloadAction<BandCreationStatuses>) {
      state.creationStatus = action.payload;
    },

    // Modify band score
    requestModifyBandScore(
      state,
      action: PayloadAction<{
        targetBandId: MongooseTypes.ObjectId;
        modifyingUserId: MongooseTypes.ObjectId;
        modificationValue: number;
        undoValue?: number;
      }>
    ) {
      state.scoreModificationState.status =
        BandScoreModificationStatuses.ATTEMPTING;
      state.scoreModificationState.target = action.payload.targetBandId;
    },
    modifyBandScoreSuccess(state, action) {
      const targetBandIndex = state.items.findIndex(
        (band) => band._id === action.payload.targetBandId
      );
      state.items[targetBandIndex].score += action.payload.modificationValue;
      state.scoreModificationState.status =
        BandScoreModificationStatuses.SUCCESS;
    },
    modifyBandScoreFailure(state) {
      // TODO: Shouldn't we be getting a reason for the failure here?
      state.scoreModificationState.status =
        BandScoreModificationStatuses.FAILURE;
      state.scoreModificationState.target = undefined;
    },
  },
});

export const bandActions = bandsSlice.actions;
export default bandsSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Types as MongooseTypes } from "mongoose";
import { BandClass } from "../../../server/models/band-model";
import { ProfileFetchStatuses } from "../statuses";

export type UserProfile = {
  id: MongooseTypes.ObjectId;
  name: string;
  totalScore: number;
  namesContributed: number;
  averageScore: number;
  bands: BandClass[];
};

type UserProfileSliceState = {
  fetchStatus: ProfileFetchStatuses;
  profile?: UserProfile;
};

const initialState: UserProfileSliceState = {
  fetchStatus: ProfileFetchStatuses.NOT_TRYING,
  profile: undefined,
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    requestFetchUserProfile(
      state,
      action: PayloadAction<{
        targetId: MongooseTypes.ObjectId;
      }>
    ) {
      state.fetchStatus = ProfileFetchStatuses.ATTEMPTING;
    },
    fetchUserProfileSuccess(
      state,
      action: PayloadAction<{ profile: UserProfile }>
    ) {
      state.fetchStatus = ProfileFetchStatuses.SUCCESS;
      state.profile = action.payload.profile;
    },
    fetchUserProfileFailure(state) {
      state.fetchStatus = ProfileFetchStatuses.FAILURE;
      state.profile = undefined;
    },
  },
});

export const userProfileActions = userProfileSlice.actions;
export default userProfileSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { AuthenticationStatuses, UserCreationStatuses } from "../statuses";
import { bandActions } from "./bands-slice";

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    authenticationStatus: AuthenticationStatuses.NOT_TRYING,
    userId: null,
    userCreationStatus: UserCreationStatuses.NOT_TRYING,
    bandsModified: [],
  },
  reducers: {
    // User authentication
    requestAuthenticateUser(state) {
      state.authenticationStatus = AuthenticationStatuses.AUTHENTICATING;
    },
    authenticateUserSuccess(state, action) {
      state.authenticationStatus = AuthenticationStatuses.AUTHENTICATED;
      state.userId = action.payload.userId;
      state.username = action.payload.username;
      state.bandsModified = action.payload.bandsModified;
    },
    authenticateUserFailure(state, action) {
      state.authenticationStatus = action.payload.reason;
      // TODO: Is it necessary to reset this to null here?
      state.userId = null;
    },

    // User creation
    requestCreateUser(state) {
      state.userCreationStatus = UserCreationStatuses.PROCESSING;
    },
    createUserSuccess(state) {
      state.userCreationStatus = UserCreationStatuses.SUCCESS;
    },
    createUserFailure(state, action) {
      state.userCreationStatus = action.payload.reason;
    },
  },
  extraReducers: {
    // Band modification
    [bandActions.modifyBandScoreSuccess.type]: (state, action) => {
      state.bandsModified.push({
        targetBandId: action.payload.modifiedBandId,
        value: action.payload.modificationValue,
      });
    },
  },
});

export const sessionActions = sessionSlice.actions;
export default sessionSlice.reducer;

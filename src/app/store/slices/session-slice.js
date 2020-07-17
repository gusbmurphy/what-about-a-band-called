import { createSlice } from "@reduxjs/toolkit";
import { AuthenticationStatuses, UserCreationStatuses } from "../statuses";
import { bandActions } from "./bands-slice";

const initialState = {
  authenticationStatus: AuthenticationStatuses.NOT_TRYING,
  userId: null,
  username: null,
  userCreationStatus: UserCreationStatuses.NOT_TRYING,
  bandsModified: [],
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
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

    // User logout
    requestLogout() {
      return initialState;
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
      console.log(
        "Modification action arrived in session reducer as: ",
        action
      );
      state.bandsModified.push({
        targetBandId: action.payload.targetBandId,
        value: action.payload.modificationValue,
      });
    },
  },
});

export const sessionActions = sessionSlice.actions;
export default sessionSlice.reducer;

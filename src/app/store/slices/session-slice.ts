import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthenticationStatuses, UserCreationStatuses } from "../statuses";
import { bandActions } from "./bands-slice";
import { Types as MongooseTypes, STATES } from "mongoose";

type SessionBandModification = {
  targetBandId: MongooseTypes.ObjectId;
  value: number;
};

type SessionSliceState = {
  authenticationStatus: AuthenticationStatuses;
  userId?: MongooseTypes.ObjectId;
  username?: string;
  userCreationStatus: UserCreationStatuses;
  bandsModified: SessionBandModification[];
};

const initialState: SessionSliceState = {
  authenticationStatus: AuthenticationStatuses.NOT_TRYING,
  userId: undefined,
  username: undefined,
  userCreationStatus: UserCreationStatuses.NOT_TRYING,
  bandsModified: [],
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    // Session checking
    requestCheckSession(state) {
      state.authenticationStatus = AuthenticationStatuses.AUTHENTICATING;
    },
    checkSessionSuccess(
      state,
      action: PayloadAction<{
        userId: MongooseTypes.ObjectId;
        username: string;
        bandsModified: SessionBandModification[];
      }>
    ) {
      state.authenticationStatus = AuthenticationStatuses.AUTHENTICATED;
      state.userId = action.payload.userId;
      state.username = action.payload.username;
      state.bandsModified = action.payload.bandsModified;
    },
    checkSessionFailure(state) {
      state.authenticationStatus = AuthenticationStatuses.NOT_TRYING;
    },

    // User authentication
    requestAuthenticateUser(
      state,
      action: PayloadAction<{
        username: string;
        password: string;
      }>
    ) {
      state.authenticationStatus = AuthenticationStatuses.AUTHENTICATING;
    },
    authenticateUserSuccess(
      state,
      action: PayloadAction<{
        userId: MongooseTypes.ObjectId;
        username: string;
        bandsModified: SessionBandModification[];
      }>
    ) {
      state.authenticationStatus = AuthenticationStatuses.AUTHENTICATED;
      state.userId = action.payload.userId;
      state.username = action.payload.username;
      state.bandsModified = action.payload.bandsModified;
    },
    authenticateUserFailure(state, action) {
      state.authenticationStatus = action.payload.reason;
      // TODO: Is it necessary to reset this to null here?
      state.userId = undefined;
    },

    // User logout
    requestLogout() {
      return initialState;
    },

    // User creation
    requestCreateUser(
      state,
      action: PayloadAction<{
        // email: string;
        username: string;
        password: string;
        repeatPassword: string;
      }>
    ) {
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
        targetBandId: action.payload.targetBandId,
        value: action.payload.modificationValue,
      });
    },
  },
});

export const sessionActions = sessionSlice.actions;
export default sessionSlice.reducer;

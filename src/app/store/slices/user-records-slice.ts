import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserRecordSortTypes } from "../statuses";
import { Types as MongooseTypes } from "mongoose";

type UserRecord = {
  id: MongooseTypes.ObjectId;
  name: string;
  totalScore: number;
  namesContributed: number;
  averageScore: number;
};

type UserRecordsSliceState = {
  pendingFetches: number;
  userRecords: UserRecord[];
};

const initialState: UserRecordsSliceState = {
  pendingFetches: 0,
  userRecords: [],
};

const userRecordsSlice = createSlice({
  name: "userRecords",
  initialState,
  reducers: {
    requestFetchUserRecords(
      state,
      action: PayloadAction<{
        numOfRecords: number;
        sortType: UserRecordSortTypes;
      }>
    ) {
      state.pendingFetches++;
    },
    fetchUserRecordsSuccess(
      state,
      action: PayloadAction<UserRecord[]>
    ) {
      action.payload.forEach((newRecord) => {
        if (!state.userRecords.some((record) => record.id == newRecord.id))
          state.userRecords.push(newRecord);
      });
      state.pendingFetches--;
    },
    fetchUserRecordsFailure(state) {
      state.pendingFetches--;
    }
  },
});

export const userRecordsActions = userRecordsSlice.actions;
export default userRecordsSlice.reducer;
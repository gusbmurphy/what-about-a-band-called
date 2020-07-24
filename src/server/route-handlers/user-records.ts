import { User } from "../models";
import { UserRecordSortTypes } from "../../app/store/statuses";
import { Types as MongooseTypes } from "mongoose";
import { UserRecord } from "../../app/store/slices/user-records-slice";

export type UserRecordsRequestBody = {
  numOfRecords?: number;
  sortType: UserRecordSortTypes;
}

export async function postUserRecords(req, res) {
  const requestBody: UserRecordsRequestBody = req.body;
  const users = await User.find({}).exec();
  let userRecords: UserRecord[];

  switch (requestBody.sortType) {
    case UserRecordSortTypes.HIGHEST_AVERAGE_SCORE:
      userRecords = await Promise.all(
        users.map(async (doc) => {
          return {
            id: doc._id,
            name: doc.name,
            averageScore: await doc.getAverageScore(),
          };
        })
      );
      userRecords.sort((a, b) => a.averageScore! - b.averageScore!);
      break;
    case UserRecordSortTypes.HIGHEST_SCORE:
      userRecords = await Promise.all(
        users.map(async (doc) => {
          return {
            id: doc._id,
            name: doc.name,
            totalScore: await doc.getTotalScore(),
          };
        })
      );
      userRecords.sort((a, b) => a.totalScore! - b.totalScore!)
      break;
    case UserRecordSortTypes.MOST_NAMES_CONTRIBUTED:
      userRecords = await Promise.all(
        users.map(async (doc) => {
          return {
            id: doc._id,
            name: doc.name,
            namesContributed: await doc.getNumOfNamesContributed(),
          };
        })
      );
      userRecords.sort((a, b) => a.namesContributed! - b.namesContributed!)
      break;
    default:
      throw new ErrorEvent("Unknown UserRecordSortType passed to postUserRecords route");
      break;
  }

  if (requestBody.numOfRecords) userRecords = userRecords.slice(0, requestBody.numOfRecords);
  
  return res.status(200).send(userRecords);
}

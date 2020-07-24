import { User } from "../models";
import { UserRecordSortTypes } from "../../app/store/statuses";
import { Types as MongooseTypes } from "mongoose";
import { UserRecord } from "../../app/store/slices/user-records-slice";

export type UserRecordsRequestBody = {
  numOfRecords?: number;
  sortType: UserRecordSortTypes;
};

export async function postUserRecords(req, res) {
  const requestBody: UserRecordsRequestBody = req.body;
  const users = await User.find({}).exec();
  let userRecords: UserRecord[];

  /* I have a feeling this is a very non-performant way of doing this, but it will work for now. I think the way
  to do it is probably have different lists in the app state for every type of ranking, maybe! */
  userRecords = await Promise.all(
    users.map(async (doc) => {
      return {
        id: doc._id,
        name: doc.name,
        averageScore: await doc.getAverageScore(),
        totalScore: await doc.getTotalScore(),
        namesContributed: await doc.getNumOfNamesContributed(),
      };
    })
  );

  // switch (requestBody.sortType) {
  //   case UserRecordSortTypes.HIGHEST_AVERAGE_SCORE:
  //     userRecords = await Promise.all(
  //       users.map(async (doc) => {
  //         return {
  //           id: doc._id,
  //           name: doc.name,
  //           averageScore: await doc.getAverageScore(),
  //           totalScore: 0,
  //         };
  //       })
  //     );
  //     userRecords.sort((a, b) => b.averageScore! - a.averageScore!);
  //     break;
  //   case UserRecordSortTypes.HIGHEST_SCORE:
  //     userRecords = await Promise.all(
  //       users.map(async (doc) => {
  //         return {
  //           id: doc._id,
  //           name: doc.name,
  //           totalScore: await doc.getTotalScore(),
  //         };
  //       })
  //     );
  //     userRecords.sort((a, b) => b.totalScore! - a.totalScore!)
  //     break;
  //   case UserRecordSortTypes.MOST_NAMES_CONTRIBUTED:
  //     userRecords = await Promise.all(
  //       users.map(async (doc) => {
  //         return {
  //           id: doc._id,
  //           name: doc.name,
  //           namesContributed: await doc.getNumOfNamesContributed(),
  //         };
  //       })
  //     );
  //     userRecords.sort((a, b) => b.namesContributed! - a.namesContributed!)
  //     break;
  //   default:
  //     throw new ErrorEvent("Unknown UserRecordSortType passed to postUserRecords route");
  //     break;
  // }

  if (requestBody.numOfRecords)
    userRecords = userRecords.slice(0, requestBody.numOfRecords);

  return res.status(200).send(userRecords);
}

import { UserRecordSortTypes } from "../../store/statuses";
import { UserRecord } from "../../store/slices/user-records-slice";

export function sortAndLimitUserRecords(
  records: UserRecord[],
  sortBy: UserRecordSortTypes,
  limit: number
): UserRecord[] {
  let filteredRecords = [...records];

  switch (sortBy) {
    case UserRecordSortTypes.HIGHEST_AVERAGE_SCORE:
      filteredRecords.sort((a, b) => b.averageScore - a.averageScore);
      break;
    case UserRecordSortTypes.HIGHEST_SCORE:
      filteredRecords.sort((a, b) => b.totalScore - a.totalScore);
      break;
    case UserRecordSortTypes.MOST_NAMES_CONTRIBUTED:
      filteredRecords.sort((a, b) => b.namesContributed - a.namesContributed);
  }

  filteredRecords = filteredRecords.slice(0, limit);
  return filteredRecords;
}

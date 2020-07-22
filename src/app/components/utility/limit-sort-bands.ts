import { BandSortTypes } from "../../store/statuses";
import { BandClass } from "../../../server/models/band-model";

export function sortAndLimitBands(
  bands: BandClass[],
  sortBy: BandSortTypes,
  limit: number
): BandClass[] {
  let filteredBands = [...bands];

  switch (sortBy) {
    case BandSortTypes.BEST:
      filteredBands.sort((a, b) => b.score - a.score);
      break;
    case BandSortTypes.MOST_RECENT:
      filteredBands.sort((a, b) => {
        // TODO: What the fuck is happening here?
        // @ts-ignore
        return Date.parse(b.createdOn) - Date.parse(a.createdOn);
      });
      break;
    case BandSortTypes.WORST:
      filteredBands.sort((a, b) => a.score - b.score);
      break;
    default:
      break;
  }

  filteredBands = filteredBands.slice(0, limit);
  return filteredBands;
}

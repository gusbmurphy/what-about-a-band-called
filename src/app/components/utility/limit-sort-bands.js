import { BandSortTypes } from "../../store/actions/types"

export function sortAndLimitBands(bands, sortBy, limit) {
  let filteredBands = [...bands];

  switch (sortBy) {
    case BandSortTypes.BEST:
      filteredBands.sort((a, b) => b.score - a.score);
      break;
    case BandSortTypes.MOST_RECENT:
      filteredBands.sort((a, b) => a.createdOn - b.createdOn);
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
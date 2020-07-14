import { BandSortTypes } from "../../store/statuses"
export function getPresentationString(status) {
  switch (status) {
    case BandSortTypes.BEST:
      return "Best Bands";
    case BandSortTypes.WORST:
      return "Worst Bands";
    case BandSortTypes.MOST_RECENT:
      return "Most Recent Bands";
    default:
      return "???";
  }
}

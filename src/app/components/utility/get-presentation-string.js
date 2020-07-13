import * as ActionTypes from "../../store/actions/types";

export function getPresentationString(status) {
  switch (status) {
    case ActionTypes.BandSortTypes.BEST:
      return "Best Bands";
    case ActionTypes.BandSortTypes.WORST:
      return "Worst Bands";
    case ActionTypes.BandSortTypes.MOST_RECENT:
      return "Most Recent Bands";
    default:
      return "???";
  }
}

import { BandSortTypes, AuthenticationStatuses } from "../../store/statuses";
export function getPresentationString(type) {
  switch (type) {
    case BandSortTypes.BEST:
      return "Best Bands";
    case BandSortTypes.WORST:
      return "Worst Bands";
    case BandSortTypes.MOST_RECENT:
      return "Most Recent Bands";
    case AuthenticationStatuses.AUTHENTICATED:
      return "Logged in!";
    case AuthenticationStatuses.AUTHENTICATING:
      return "Authenticating...";
    case AuthenticationStatuses.INVALID_USERNAME:
      return "Username not found.";
    case AuthenticationStatuses.INVALID_PASSWORD:
      return "Incorrect password.";
    case AuthenticationStatuses.NOT_AUTHENTICATED:
    case AuthenticationStatuses.NOT_TRYING:
      return "";
    case AuthenticationStatuses.SERVER_ERROR:
      return "Server error.";
    default:
      throw Error("Unknown type passed to getPresentationString");
  }
}

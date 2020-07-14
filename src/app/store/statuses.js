export const BandCreationStatuses = {
  CREATING: "CREATING",
  CREATED: "CREATED",
  ERROR: "ERROR",
  BAND_EXISTS: "BAND_EXISTS",
  NOT_TRYING: "NOT_TRYING",
};

export const BandSortTypes = {
  BEST: "BEST",
  WORST: "WORST",
  MOST_RECENT: "MOST_RECENT",
};

export const BandScoreModificationStatuses = {
  ATTEMPTING: "ATTEMPTING",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
  NOT_TRYING: "NOT_TRYING",
};

export const AuthenticationStatuses = {
  AUTHENTICATING: "AUTHENTICATING",
  AUTHENTICATED: "AUTHENTICATED",
  NOT_AUTHENTICATED: "NOT_AUTHENTICATED",
  NOT_TRYING: "NOT_TRYING",
  SERVER_ERROR: "SERVER_ERROR",
  INVALID_USERNAME: "INVALID_USERNAME",
  INVALID_PASSWORD: "INVALID_PASSWORD",
};

export const UserCreationStatuses = {
  PROCESSING: "PROCESSING",
  PASSWORDS_DONT_MATCH: "PASSWORDS_DONT_MATCH",
  USERNAME_TAKEN: "USERNAME_TAKEN",
  NOT_TRYING: "NOT_TRYING",
  SERVER_ERROR: "SERVER_ERROR",
  SUCCESS: "SUCCESS",
  EMPTY_FIELDS: "EMPTY_FIELDS",
};

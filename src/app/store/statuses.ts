export enum UserRecordSortTypes {
  HIGHEST_SCORE,
  HIGHEST_AVERAGE_SCORE,
  MOST_NAMES_CONTRIBUTED
}

export enum BandCreationStatuses {
  CREATING,
  CREATED,
  ERROR,
  BAND_EXISTS,
  NOT_TRYING,
}

export enum BandSortTypes {
  BEST,
  WORST,
  MOST_RECENT,
}

export enum BandScoreModificationStatuses {
  ATTEMPTING,
  SUCCESS,
  FAILURE,
  NOT_TRYING,
}

export enum ProfileFetchStatuses {
  ATTEMPTING,
  SUCCESS,
  FAILURE,
  NOT_TRYING
}

export enum AuthenticationStatuses {
  AUTHENTICATING,
  AUTHENTICATED,
  NOT_AUTHENTICATED,
  NOT_TRYING,
  SERVER_ERROR,
  USERNAME_NOT_FOUND,
  INVALID_PASSWORD,
  LOGGING_OUT,
}

export enum UserCreationStatuses {
  PROCESSING,
  PASSWORDS_DONT_MATCH,
  USERNAME_TAKEN,
  NOT_TRYING,
  SERVER_ERROR,
  SUCCESS,
  EMPTY_FIELDS,
  INVALID_EMAIL,
  EMAIL_TAKEN,
}

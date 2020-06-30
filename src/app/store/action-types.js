export const CREATE_USER_BEGIN = "CREATE_USER_BEGIN";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

export const UserCreationStatuses = {
  PROCESSING: "PROCESSING",
  PASSWORDS_DONT_MATCH: "PASSWORDS_DONT_MATCH",
  USERNAME_TAKEN: "USERNAME_TAKEN",
  NOT_TRYING: "NOT_TRYING",
  SERVER_ERROR: "SERVER_ERROR",
  SUCCESS: "SUCCESS",
};

export const AUTHENTICATE_USER_BEGIN = "AUTHENTICATE_USER_BEGIN";
export const AUTHENTICATE_USER_SUCCESS = "AUTHENTICATE_USER_SUCCESS";
export const AUTHENTICATE_USER_FAILURE = "AUTHENTICATE_USER_FAILURE";

export const AuthenticationStatuses = {
  AUTHENTICATING: "AUTHENTICATING",
  AUTHENTICATED: "AUTHENTICATED",
  NOT_AUTHENTICATED: "NOT_AUTHENTICATED",
  NOT_TRYING: "NOT_TRYING",
  SERVER_ERROR: "SERVER_ERROR",
  INVALID_USERNAME: "INVALID_USERNAME",
  INVALID_PASSWORD: "INVALID_PASSWORD",
};

export const FETCH_BANDS_BEGIN = "FETCH_BANDS_BEGIN";
export const FETCH_BANDS_SUCCESS = "FETCH_BANDS_SUCCESS";
export const FETCH_BANDS_FAILURE = "FETCH_BANDS_FAILURE";

export const MODIFY_BAND_SCORE_BEGIN = "MODIFY_BAND_SCORE_BEGIN";
export const MODIFY_BAND_SCORE_SUCCESS = "MODIFY_BAND_SCORE_SUCCESS";
export const MODIFY_BAND_SCORE_FAILURE = "MODIFY_BAND_SCORE_FAILURE";

export const BandScoreModificationStatuses = {
  ATTEMPTING: "ATTEMPTING",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
  NOT_TRYING: "NOT_TRYING",
};

export const CREATE_BAND_BEGIN = "CREATE_BAND_BEGIN";
export const CREATE_BAND_SUCCESS = "CREATE_BAND_SUCCESS";
export const CREATE_BAND_FAILURE = "CREATE_BAND_FAILURE";

export const BandCreationStatuses = {
  CREATING: "CREATING",
  CREATED: "CREATED",
  ERROR: "ERROR",
  BAND_EXISTS: "BAND_EXISTS",
  NOT_TRYING: "NOT_TRYING",
};

export const SET_STATE = "SET_STATE";

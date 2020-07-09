import * as actionTypes from "../types";

export const beginAuthenticateUser = (username, password) => ({
  type: actionTypes.AUTHENTICATE_USER_BEGIN,
  username,
  password,
});
export const authenticateUserSuccess = (userId, username, bandsModified) => ({
  type: actionTypes.AUTHENTICATE_USER_SUCCESS,
  userId,
  username,
  bandsModified,
});
export const authenticateUserFailure = (reason) => ({
  type: actionTypes.AUTHENTICATE_USER_FAILURE,
  reason
});

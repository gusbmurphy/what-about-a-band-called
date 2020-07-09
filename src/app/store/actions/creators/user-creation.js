import * as actionTypes from "../types";

export const beginCreateUser = (username, password) => ({
  type: actionTypes.CREATE_USER_BEGIN,
  username,
  password,
});
export const createUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS,
});
export const createUserFailure = (reason) => ({
  type: actionTypes.CREATE_USER_FAILURE,
  reason,
});

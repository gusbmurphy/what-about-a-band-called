import * as actionTypes from "../types";

export const beginBandCreation = (creatingUserId, bandName) => ({
  type: actionTypes.CREATE_BAND_BEGIN,
  creatingUserId: creatingUserId,
  bandName,
});
export const bandCreationSuccess = (newBand) => ({
  type: actionTypes.CREATE_BAND_SUCCESS,
  newBand,
});
export const bandCreationFailure = (reason) => ({
  type: actionTypes.CREATE_BAND_FAILURE,
  reason,
});

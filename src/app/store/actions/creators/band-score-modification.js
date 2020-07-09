import * as actionTypes from "../types";

export const beginModifyBandScore = (
  targetBandId,
  modifyingUserId,
  modificationValue
) => ({
  type: actionTypes.MODIFY_BAND_SCORE_BEGIN,
  targetBandId,
  modifyingUserId,
  modificationValue,
});
export const modifyBandScoreSuccess = (modifiedBandId, modificationValue) => ({
  type: actionTypes.MODIFY_BAND_SCORE_SUCCESS,
  modifiedBandId,
  modificationValue,
});
export const modifyBandScoreFailure = () => ({
  type: actionTypes.MODIFY_BAND_SCORE_FAILURE,
});

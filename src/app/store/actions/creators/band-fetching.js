import * as actionTypes from "../types";

export const requestFetchBands = (maxBands = undefined, sortBy = undefined) => ({
  type: actionTypes.REQUEST_FETCH_BANDS,
  maxBands,
  sortBy
});
export const beginFetchBands = (maxBands = undefined, sortBy = undefined) => ({
  type: actionTypes.FETCH_BANDS_BEGIN,
  maxBands,
  sortBy
});
export const fetchBandsSuccess = (bands) => ({
  type: actionTypes.FETCH_BANDS_SUCCESS,
  bands,
});
export const fetchBandsFailure = () => ({
  type: actionTypes.FETCH_BANDS_FAILURE,
});

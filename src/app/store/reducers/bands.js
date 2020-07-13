import * as actionTypes from "../actions/types";

export function bands(
  state = {
    pendingFetches: 0,
    items: [],
    creationStatus: actionTypes.BandCreationStatuses.NOT_TRYING,
    scoreModification: {
      status: actionTypes.BandScoreModificationStatuses.NOT_TRYING,
      target: null,
    },
  },
  action
) {
  switch (action.type) {
    // FETCH_BANDS
    case actionTypes.REQUEST_FETCH_BANDS:
      return {
        ...state,
        pendingFetches: state.pendingFetches + 1,
      };
    case actionTypes.FETCH_BANDS_BEGIN:
      return {
        ...state,
      };
    case actionTypes.FETCH_BANDS_SUCCESS: {
      let nonDuplicateBands = [...state.items];
      action.bands.forEach((newBand) => {
        if (!nonDuplicateBands.some((band) => band._id == newBand._id))
          nonDuplicateBands.push(newBand);
      });

      return {
        ...state,
        pendingFetches: state.pendingFetches - 1,
        items: nonDuplicateBands,
      };
    }
    case actionTypes.FETCH_BANDS_FAILURE:
      return {
        ...state,
        pendingFetches: state.pendingFetches - 1,
      };

    // CREATE_BAND
    case actionTypes.CREATE_BAND_BEGIN:
      return {
        ...state,
        creationStatus: actionTypes.BandCreationStatuses.CREATING,
      };
    case actionTypes.CREATE_BAND_FAILURE:
      return {
        ...state,
        creationStatus: action.reason,
      };
    case actionTypes.CREATE_BAND_SUCCESS:
      return {
        ...state,
        creationStatus: actionTypes.BandCreationStatuses.CREATED,
        items: [...state.items, action.newBand],
      };

    // MODIFY_BAND_SCORE
    case actionTypes.MODIFY_BAND_SCORE_BEGIN:
      return {
        ...state,
        scoreModification: {
          status: actionTypes.BandScoreModificationStatuses.ATTEMPTING,
          target: action.target,
        },
      };
    case actionTypes.MODIFY_BAND_SCORE_FAILURE:
      return {
        ...state,
        scoreModification: {
          status: actionTypes.BandScoreModificationStatuses.FAILURE,
          target: null,
        },
      };
    case actionTypes.MODIFY_BAND_SCORE_SUCCESS: {
      let bandsCopy = [...state.items];
      let targetBandIndex = bandsCopy.findIndex(
        (band) => band._id === action.modifiedBandId
      );
      let targetBand = bandsCopy.splice(targetBandIndex, 1)[0];
      targetBand.score = targetBand.score + action.modificationValue;
      bandsCopy.splice(targetBandIndex, 0, targetBand);
      return {
        ...state,
        items: bandsCopy,
        scoreModification: {
          ...state.scoreModification,
          status: actionTypes.BandScoreModificationStatuses.SUCCESS,
        },
      };
    }
    default:
      return state;
  }
}
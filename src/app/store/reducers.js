import * as actionTypes from "./action-types";

export function session(
  state = {
    authenticationStatus: actionTypes.AuthenticationStatuses.NOT_TRYING,
    userId: null,
    userCreationStatus: actionTypes.UserCreationStatuses.NOT_TRYING,
  },
  action
) {
  switch (action.type) {
    // AUTHENTICATE_USER
    case actionTypes.AUTHENTICATE_USER_BEGIN:
      return {
        ...state,
        authenticationStatus: actionTypes.AuthenticationStatuses.AUTHENTICATING,
        userId: null,
      };
    case actionTypes.AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        authenticationStatus: actionTypes.AuthenticationStatuses.AUTHENTICATED,
        userId: action.userId,
      };
    case actionTypes.AUTHENTICATE_USER_FAILURE:
      return {
        ...state,
        authenticationStatus: action.reason,
        userId: null,
      };

    // CREATE_USER
    case actionTypes.CREATE_USER_BEGIN:
      return {
        ...state,
        userCreationStatus: actionTypes.UserCreationStatuses.PROCESSING,
      };
    case actionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        userCreationStatus: actionTypes.UserCreationStatuses.SUCCESS,
      };
    case actionTypes.CREATE_USER_FAILURE:
      return {
        ...state,
        userCreationStatus: action.reason,
      };
    default:
      return state;
  }
}

export function bands(
  state = {
    fetching: false,
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
    case actionTypes.FETCH_BANDS_BEGIN:
      return {
        ...state,
        fetching: true,
      };
    case actionTypes.FETCH_BANDS_SUCCESS:
      return {
        ...state,
        fetching: false,
        items: action.bands,
      };
    case actionTypes.FETCH_BANDS_FAILURE:
      return {
        ...state,
        fetching: false,
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
    case actionTypes.MODIFY_BAND_SCORE_SUCCESS:
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

    default:
      return state;
  }
}

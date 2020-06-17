import * as actionTypes from "./action-types";

export function session(
  state = {
    authenticated: actionTypes.AuthenticationStatuses.NOT_AUTHENTICATED,
    userId: null,
  },
  action
) {
  switch (action.type) {
    case actionTypes.AUTHENTICATE_USER_BEGIN:
      return {
        ...state,
        authenticated: actionTypes.AuthenticationStatuses.AUTHENTICATING,
        userId: null,
      };
    case actionTypes.AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        authenticated: actionTypes.AuthenticationStatuses.AUTHENTICATED,
        userId: action.userId,
      };
    case actionTypes.AUTHENTICATE_USER_FAILURE:
      return {
        ...state,
        authenticated: actionTypes.AuthenticationStatuses.NOT_AUTHENTICATED,
        userId: null,
      };
    default:
      return state;
  }
}

export function bands(
  state = {
    fetching: false,
    items: [],
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
    case actionTypes.CREATE_BAND_FAILURE:
      // TODO: Should I be doing more, like getting something to display a failure,
      // or that there is a process taking place?
      return state;
    case actionTypes.CREATE_BAND_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.newBand],
      };

    // MODIFY_BAND_SCORE
    case actionTypes.MODIFY_BAND_SCORE_BEGIN:
    case actionTypes.MODIFY_BAND_SCORE_FAILURE:
      // TODO: Should I be doing more, like getting something to display a failure,
      // or that there is a process taking place?
      return state;
    case actionTypes.MODIFY_BAND_SCORE_SUCCESS:
      let bandsCopy = [...state.items];
      let targetBandIndex = bandsCopy.findIndex(
        (band) => band.id === action.modifiedBandId
      );
      let targetBand = bandsCopy.splice(targetBandIndex, 1)[0];
      targetBand.score = targetBand.score + action.modificationValue;
      bandsCopy.splice(targetBandIndex, 0, targetBand);
      return {
        ...state,
        items: bandsCopy,
      };

    default:
      return state;
  }
}

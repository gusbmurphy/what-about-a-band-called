import * as actionTypes from "./action-types";

export function session(
  state = {
    authenticationStatus: actionTypes.AuthenticationStatuses.NOT_TRYING,
    userId: null,
    userCreationStatus: actionTypes.UserCreationStatuses.NOT_TRYING
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
        authenticationStatus: actionTypes.AuthenticationStatuses.NOT_AUTHENTICATED,
        userId: null,
      };

    // CREATE_USER
    case actionTypes.CREATE_USER_BEGIN:
      return {
        ...state,
        userCreationStatus: actionTypes.UserCreationStatuses.PROCESSING
      };
    case actionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        userCreationStatus: actionTypes.UserCreationStatuses.NOT_TRYING
      }
    case actionTypes.CREATE_USER_FAILURE:
      return {
        ...state,
        userCreationStatus: action.reason
      }
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

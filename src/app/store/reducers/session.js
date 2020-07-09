import * as actionTypes from "../actions/types";

export function session(
  state = {
    authenticationStatus: actionTypes.AuthenticationStatuses.NOT_TRYING,
    userId: null,
    userCreationStatus: actionTypes.UserCreationStatuses.NOT_TRYING,
    bandsModified: [],
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
        username: action.username,
        bandsModified: action.bandsModified,
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

    // BAND_MODIFICATIONS
    case actionTypes.MODIFY_BAND_SCORE_SUCCESS:
      return {
        ...state,
        bandsModified: [
          ...state.bandsModified,
          {
            targetBandId: action.modifiedBandId,
            value: action.modificationValue,
          },
        ],
      };
    default:
      return state;
  }
}

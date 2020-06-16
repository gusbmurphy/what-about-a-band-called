import * as actions from "./action-types";

// TODO: I don't really understand what session is supposed to be, I'm getting userID from the session, what's going on?
export function session(state = { authenticated: actions.NOT_AUTHENTICATED }, action) {
  let { type, authenticated, session } = action;
  switch (type) {
    case actions.REQUEST_AUTHENTICATE_USER:
      return { ...state, authenticated: actions.AUTHENTICATING };
    case actions.PROCESSING_AUTHENTICATE_USER:
      return { ...state, authenticated, userID: state.userID };
    default:
      return state;
  }
}

export function bands(state = [], action) {
  switch (action.type) {
    case actions.FETCH_BANDS_SUCCESS:
      return action.bands;

    case actions.CREATE_BAND:
      return [
        ...state,
        {
          id: action.id,
          owner: action.owner,
          name: action.name,
          score: 0,
          flags: 0,
        },
      ];

    case actions.MODIFY_BAND_SCORE:
      if (action.status === actions.AUTHENTICATED) {
        let bandsCopy = [...state];
        let targetBandIndex = bandsCopy.findIndex(
          (band) => band.id === action.bandID
        );
        let targetBand = bandsCopy.splice(targetBandIndex, 1)[0];
        targetBand.score = targetBand.score + action.value;
        bandsCopy.splice(targetBandIndex, 0, targetBand);
        return bandsCopy;
      } else {
        return state;
      }

    default:
      return state;
  }
}
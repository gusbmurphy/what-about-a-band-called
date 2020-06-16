import * as actions from "./action-types";

export const requestBandCreation = (creatingUserID, name) => ({
    type: actions.REQUEST_BAND_CREATION,
    creatingUserID,
    name
});

export const beginFetchBands = () => ({
    type: actions.FETCH_BANDS_BEGIN
});

export const fetchBandsSuccess = (bands) => ({
    type: actions.FETCH_BANDS_SUCCESS,
    bands
})

export const createBand = (id, owner, name) => ({
    type: actions.CREATE_BAND,
    id,
    owner,
    name
});

// TODO: Implement modiying band score with unique users. Should only be able to perform one modification from each user
export const requestModifyBandScore = (bandID, modifyingUserID, value) => ({
    type: actions.REQUEST_MODIFY_BAND_SCORE,
    bandID,
    modifyingUserID,
    value
}); 

export const processModifyBandScore = (status, bandID, modifiyingUserID, value) => ({
    type: actions.MODIFY_BAND_SCORE,
    status,
    bandID,
    modifiyingUserID,
    value
}); 

export const requestAuthenticateUser = (username, password) => ({
    type: actions.REQUEST_AUTHENTICATE_USER,
    username,
    password
});

export const processAuthenticateUser = (status = AUTHENTICATING, session = null) => ({
    type: actions.PROCESSING_AUTHENTICATE_USER,
    session,
    authenticated: status
});

export const setState = (state = {}) => ({
    type: actions.SET_STATE,
    state
});
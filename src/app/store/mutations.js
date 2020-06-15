export const REQUEST_BAND_CREATION = "REQUEST_BAND_CREATION";
export const CREATE_BAND = "CREATE_BAND";
export const REQUEST_MODIFY_BAND_SCORE = "REQUEST_MODIFY_BAND_SCORE";
export const MODIFY_BAND_SCORE = "MODIFY_BAND_SCORE";
export const REQUEST_AUTHENTICATE_USER = "REQUEST_AUTHENTICATE_USER";
export const PROCESSING_AUTHENTICATE_USER = "PROCESSING_AUTHENTICATE_USER";
export const AUTHENTICATING = "AUTHENTICATING";
export const AUTHENTICATED = "AUTHENTICATED";
export const NOT_AUTHENTICATED = "NOT_AUTHENTICATED";
export const SET_STATE = "SET_STATE";
export const FETCH_BANDS_BEGIN = "FETCH_BANDS_BEGIN";
export const FETCH_BANDS_SUCCESS = "FETCH_BANDS_SUCCESS";
export const FETCH_BANDS_FAILURE = "FETCH_BANDS_SUCCESS";

export const requestBandCreation = (creatingUserID, name) => ({
    type: REQUEST_BAND_CREATION,
    creatingUserID,
    name
});

export const beginFetchBands = () => ({
    type: FETCH_BANDS_BEGIN
});

export const fetchBandsSuccess = (bands) => ({
    type: FETCH_BANDS_SUCCESS,
    bands
})

export const createBand = (id, owner, name) => ({
    type: CREATE_BAND,
    id,
    owner,
    name
});

// TODO: Implement modiying band score with unique users. Should only be able to perform one modification from each user
export const requestModifyBandScore = (bandID, modifyingUserID, value) => ({
    type: REQUEST_MODIFY_BAND_SCORE,
    bandID,
    modifyingUserID,
    value
}); 

export const processModifyBandScore = (status, bandID, modifiyingUserID, value) => ({
    type: MODIFY_BAND_SCORE,
    status,
    bandID,
    modifiyingUserID,
    value
}); 

export const requestAuthenticateUser = (username, password) => ({
    type: REQUEST_AUTHENTICATE_USER,
    username,
    password
});

export const processAuthenticateUser = (status = AUTHENTICATING, session = null) => ({
    type: PROCESSING_AUTHENTICATE_USER,
    session,
    authenticated: status
});

export const setState = (state = {}) => ({
    type: SET_STATE,
    state
});
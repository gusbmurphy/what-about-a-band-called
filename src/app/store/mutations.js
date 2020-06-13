export const REQUEST_BAND_CREATION = "REQUEST_BAND_CREATION";
export const CREATE_BAND = "CREATE_BAND";
export const MODIFY_BAND_SCORE = "MODIFY_BAND_SCORE";
export const REQUEST_AUTHENTICATE_USER = "REQUEST_AUTHENTICATE_USER";
export const PROCESSING_AUTHENTICATE_USER = "PROCESSING_AUTHENTICATE_USER";
export const AUTHENTICATING = "AUTHENTICATING";
export const AUTHENTICATED = "AUTHENTICATED";
export const NOT_AUTHENTICATED = "NOT_AUTHENTICATED";
export const SET_STATE = "SET_STATE";

export const requestBandCreation = (creatingUserID, name) => ({
    type: REQUEST_BAND_CREATION,
    creatingUserID,
    name
});

export const createBand = (id, owner, name) => ({
    type: CREATE_BAND,
    id,
    owner,
    name
});

export const modifyBandScore = (bandID, modifiyingUserID, value) => ({
    type: MODIFY_BAND_SCORE,
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
})
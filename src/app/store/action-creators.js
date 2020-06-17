import * as actionTypes from "./action-types";

// Band creation
export const beginBandCreation = (creatingUserId, bandName) => ({
    type: actionTypes.CREATE_BAND_BEGIN,
    creatingUserId: creatingUserId,
    bandName
});
export const bandCreationSuccess = (newBand) => ({
    type: actionTypes.CREATE_BAND_SUCCESS,
    newBand
});
export const bandCreationFailure = () => ({
    type: actionTypes.CREATE_BAND_FAILURE
});

// Band fetching
export const beginFetchBands = () => ({
    type: actionTypes.FETCH_BANDS_BEGIN
});
export const fetchBandsSuccess = (bands) => ({
    type: actionTypes.FETCH_BANDS_SUCCESS,
    bands
});
export const fetchBandsFailure = () => ({
    type: actionTypes.FETCH_BANDS_FAILURE
});

// Band modification
export const beginModifyBandScore = (targetBandId, modifyingUserId, modificationValue) => ({
    type: actionTypes.MODIFY_BAND_SCORE_BEGIN,
    targetBandId,
    modifyingUserId,
    modificationValue
}); 
export const modifyBandScoreSuccess = (modifiedBandId, modificationValue) => ({
    type: actionTypes.MODIFY_BAND_SCORE_SUCCESS,
    modifiedBandId,
    modificationValue
});
export const modifyBandScoreFailure = () => ({
    type: actionTypes.MODIFY_BAND_SCORE_FAILURE
});

// User authentication
export const beginAuthenticateUser = (username, password) => ({
    type: actionTypes.AUTHENTICATE_USER_BEGIN,
    username,
    password
});
export const authenticateUserSuccess = (userId) => ({
    type: actionTypes.AUTHENTICATE_USER_SUCCESS,
    userId
});
export const authenticateUserFailure = () => ({
    type: actionTypes.AUTHENTICATE_USER_FAILURE
});


// export const processAuthenticateUser = (status = AUTHENTICATING, session = null) => ({
//     type: actions.PROCESSING_AUTHENTICATE_USER,
//     session,
//     authenticated: status
// });

// export const setState = (state = {}) => ({
//     type: actions.SET_STATE,
//     state
// });
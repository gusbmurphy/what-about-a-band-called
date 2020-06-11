export const REQUEST_BAND_CREATION = "REQUEST_BAND_CREATION";
export const CREATE_BAND = "CREATE_BAND";
// export const REQUEST_BAND_SCORE_MODIFICATION = "REQUEST_BAND_SCORE_MODIFICATION";
export const MODIFY_BAND_SCORE = "MODIFY_BAND_SCORE";

export const requestBandCreation = (creatingUserID) => ({
    type: REQUEST_BAND_CREATION,
    creatingUserID
});

export const createBand = (id, owner, name) => ({
    type: CREATE_BAND,
    id,
    owner,
    name
});

// export const requestBandScoreModification = (bandID, modifiyingUserID) => ({
//     type: REQUEST_BAND_SCORE_MODIFICATION,
//     bandID,
//     modifiyingUserID
// });

export const modifyBandScore = (bandID, modifiyingUserID, value) => ({
    type: MODIFY_BAND_SCORE,
    bandID,
    modifiyingUserID,
    value
}); 
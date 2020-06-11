export const REQUEST_BAND_CREATION = "REQUEST_BAND_CREATION";
export const CREATE_BAND = "CREATE_BAND";
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

export const modifyBandScore = (bandID, modifiyingUserID, value) => ({
    type: MODIFY_BAND_SCORE,
    bandID,
    modifiyingUserID,
    value
}); 
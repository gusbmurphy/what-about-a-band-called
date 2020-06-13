import {
    take,
    put,
    select
} from "redux-saga/effects";
import { v1 as uuid } from "uuid";

import * as mutations from "./mutations";

export function* bandCreationSaga() {
    while (true) {
        let { creatingUserID, name } = yield take(mutations.REQUEST_BAND_CREATION);
        let id = uuid();
        yield put(mutations.createBand(id, creatingUserID, name));
    }
}
import { take, put, call } from "redux-saga/effects";
import axios from "axios";
import * as paths from "../../../server/paths";
import { sessionActions } from "../slices/session-slice";
import { UserCreationStatuses } from "../statuses";

export function* userCreationSaga() {
  while (true) {
    const { payload } = yield take(sessionActions.requestCreateUser.type);
    const { email, username, password, repeatPassword } = payload;

    if (!emailIsValid(email)) {
      yield put(
        sessionActions.createUserFailure({
          reason: UserCreationStatuses.INVALID_EMAIL,
        })
      );
    } else {
      if (password !== repeatPassword) {
        yield put(
          sessionActions.createUserFailure({
            reason: UserCreationStatuses.PASSWORDS_DONT_MATCH,
          })
        );
      } else {
        try {
          const response = yield call(
            axios.post,
            paths.serverUrl + paths.createUser,
            {
              username,
              password,
              email,
            }
          );
          if (response.status == 200) {
            yield put(sessionActions.createUserSuccess());
          }
        } catch (error) {
          yield put(
            sessionActions.createUserFailure({
              reason: error.response.data.reason,
            })
          );
        }
      }
    }
  }
}

function emailIsValid(email: string): boolean {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

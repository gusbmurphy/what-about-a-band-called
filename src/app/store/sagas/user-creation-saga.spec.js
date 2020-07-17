import { cloneableGenerator } from "@redux-saga/testing-utils";
import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import * as paths from "../../../server/paths";
import { sessionActions } from "../slices/session-slice";
import { userCreationSaga, emailIsValid } from "./user-creation-saga";
import { UserCreationStatuses } from "../statuses";

describe("User Creation Saga", function () {
  let generatorWaitingForRequest = cloneableGenerator(userCreationSaga)();

  it("waits for a request to create user action", function () {
    generatorWaitingForRequest
      .next()
      .value.should.deep.equal(take(sessionActions.requestCreateUser.type));
  });

  let username = "username1";
  let password = "password1";
  let notTheSamePassword = "password2";
  let validEmail = "asdf@asdf.com";
  let invalidEmail = "fasd98uiuh";
  let clone = generatorWaitingForRequest.clone();

  it("yields a put effect with a user creation failure action if the email is invalid", function () {
    clone.next();
    clone
      .next(sessionActions.requestAuthenticateUser({ email: invalidEmail }))
      .value.should.deep.equal(
        put(
          sessionActions.createUserFailure({
            reason: UserCreationStatuses.INVALID_EMAIL,
          })
        )
      );
  });

  clone = generatorWaitingForRequest.clone();

  it("yields a put effect with a user creation failure action if the passwords don't match", function () {
    clone.next();
    clone
      .next({
        payload: {
          email: validEmail,
          password,
          repeatPassword: notTheSamePassword,
        },
      })
      .value.should.deep.equal(
        put(
          sessionActions.createUserFailure({
            reason: UserCreationStatuses.PASSWORDS_DONT_MATCH,
          })
        )
      );
  });

  it("yields a call effect to post to the user creation route with the username, email and password provided by the begin action if they're all acceptable", function () {
    generatorWaitingForRequest
      .next({ payload: { username, password, email: validEmail, repeatPassword: password } })
      .value.should.deep.equal(
        call(axios.post, paths.serverUrl + paths.createUser, {
          username,
          password,
        })
      );
  });

  it("yields a put effect with a user creation success action if the response status was 200", function () {
    generatorWaitingForRequest
      .next({ status: 200 })
      .value.should.deep.equal(put(sessionActions.createUserSuccess()));
  });

  let reason = "reason1";

  it("yields a put effect with a user creation failure action with a reason if there was in error in response from the server", function () {
    let clone = generatorWaitingForRequest.clone();
    clone
      .throw({ response: { status: 400, data: { reason } } })
      .value.should.deep.equal(
        put(sessionActions.createUserFailure({ reason }))
      );
  });
});

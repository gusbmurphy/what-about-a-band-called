import { cloneableGenerator } from "@redux-saga/testing-utils";
import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import * as paths from "../../../server/paths";
import { sessionActions } from "../slices/session-slice";
import { userCreationSaga } from "./user-creation-saga";

describe("User Creation Saga", function () {
  let generator = cloneableGenerator(userCreationSaga)();

  it("waits for a request to create user action", function () {
    generator
      .next()
      .value.should.deep.equal(take(sessionActions.requestCreateUser.type));
  });

  let username = "username1";
  let password = "password1";

  it("yields a call effect to post to the user creation route with the username and password provided by the begin action", function () {
    generator.next({ payload: { username, password } }).value.should.deep.equal(
      call(axios.post, paths.serverUrl + paths.createUser, {
        username,
        password,
      })
    );
  });

  it("yields a put effect with a user creation success action if the response status was 200", function () {
    let clone = generator.clone();
    clone
      .next({ status: 200 })
      .value.should.deep.equal(put(sessionActions.createUserSuccess()));
  });

  let reason = "reason1";

  it("yields a put effect with a user creation failure action with a reason if there was in error in response from the server", function () {
    let clone = generator.clone();
    clone
      .throw({ response: { status: 500, data: { reason } } })
      .value.should.deep.equal(
        put(sessionActions.createUserFailure({ reason }))
      );
  });
});

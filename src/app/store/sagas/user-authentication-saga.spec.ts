import { cloneableGenerator } from "@redux-saga/testing-utils";
import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import * as paths from "../../../server/paths";
import { sessionActions } from "../slices/session-slice";
import { userAuthenticationSaga } from "./user-authentication-saga";

describe("User Authentication Saga", function () {
  const generator = cloneableGenerator(userAuthenticationSaga)();

  it("waits for an authenticate user begin action", function () {
    generator
      .next()
      .value.should.deep.equal(
        take(sessionActions.requestAuthenticateUser.type)
      );
  });

  const username = "username1";
  const password = "password1";

  it("yields a call effect to post to the authentication route with the username and password from the begin action", function () {
    generator.next({ payload: { username, password } }).value.should.deep.equal(
      call(axios.post, paths.serverUrl + paths.authenticate, {
        username,
        password,
      })
    );
  });

  const userId = "userId1";
  const bandsModified = ["band1", "band2"];

  it("if the response status is 200, it yields a put effect that the authentication was successful with the user's id, name, and array of modified bands", function () {
    const clone = generator.clone();
    clone
      .next({ status: 200, data: { userId, bandsModified, username } })
      .value.should.deep.equal(
        put(
          sessionActions.authenticateUserSuccess({
            userId,
            username,
            bandsModified,
          })
        )
      );
  });

  const reason = "reason1";

  it("if the axios responds with an error, it puts a failure action with the reason", function () {
    const clone = generator.clone();
    clone!
      .throw({ response: { status: 500, data: { reason } } })
      .value.should.deep.equal(
        put(sessionActions.authenticateUserFailure({ reason }))
      );
  });
});

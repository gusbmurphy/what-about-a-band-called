import { AuthenticationStatuses, UserCreationStatuses } from "../statuses";
import sessionReducer, { sessionActions } from "./session-slice";
import { bandActions } from "./bands-slice";

describe.only("Session Slice", function () {
  describe("Authentication", function () {
    let state;

    it("has a default state where authentication status is 'NOT_TRYING' and both userId and username are null", function () {
      state = sessionReducer(undefined, {});
      state.should.haveOwnProperty(
        "authenticationStatus",
        AuthenticationStatuses.NOT_TRYING
      );
      state.should.haveOwnProperty("userId", null);
      state.should.haveOwnProperty("username", null);
      state.should.haveOwnProperty(
        "userCreationStatus",
        UserCreationStatuses.NOT_TRYING
      );
    });

    let userId = "userId1";
    let username = "username";
    let bandsModified = ["band1", "band2"];

    it("changes the authentication status, username, bands modified, and user id appropriately when recieving authentication begin and success actions", function () {
      state = sessionReducer(state, {
        type: sessionActions.requestAuthenticateUser.type,
      });
      state.authenticationStatus.should.equal(
        AuthenticationStatuses.AUTHENTICATING,
        "status should be AUTHENTICATING after recieving begin action"
      );

      state = sessionReducer(state, {
        type: sessionActions.authenticateUserSuccess.type,
        payload: { userId, username, bandsModified },
      });
      state.authenticationStatus.should.equal(
        AuthenticationStatuses.AUTHENTICATED,
        "status should be AUTHENTICATED after recieving success action"
      );

      state.should.haveOwnProperty("userId", userId);
      state.should.haveOwnProperty("username", username);
      state.should.haveOwnProperty("bandsModified", bandsModified);
    });

    it("sets authentication status to be reason of failure, and does not have a user id in the state when a authentication failure action is recieved", function () {
      let reason = "reason1";
      state = sessionReducer(state, {
        type: sessionActions.authenticateUserFailure.type,
        payload: { reason },
      });

      state.should.haveOwnProperty(
        "userId",
        null,
        "userId property should be null"
      );

      state.should.haveOwnProperty(
        "authenticationStatus",
        reason,
        "authentication status should be set to the reason of the failure"
      );
    });

    it("returns to the default state once a request to logout is recieved", function () {
      let defaultState = sessionReducer(undefined, {});

      let userId = "userId";
      let username = "username";
      let bandsModified = ["bandmod1", "bandmod2"];
      let initialState = {
        authenticationStatus: AuthenticationStatuses.AUTHENTICATED,
        userId,
        username,
        userCreationStatus: UserCreationStatuses.NOT_TRYING,
        bandsModified,
      };

      let nextState = sessionReducer(
        initialState,
        sessionActions.requestLogout()
      );
      nextState.should.deep.equal(defaultState);
    });
  });

  describe("Account Creation", function () {
    let state;

    it("begins with a default state where the user creation status is NOT_TRYING", function () {
      state = sessionReducer(undefined, {});
      state.should.haveOwnProperty(
        "userCreationStatus",
        UserCreationStatuses.NOT_TRYING
      );
    });

    it("sets status to PROCESSING when an action type of CREATE_USER_BEGIN is recieved", function () {
      state = sessionReducer(state, {
        type: sessionActions.requestCreateUser.type,
      });
      state.should.haveOwnProperty(
        "userCreationStatus",
        UserCreationStatuses.PROCESSING
      );
    });

    it("sets status to the action's delivered reason when creation fails", function () {
      let reason = "reason";
      state = sessionReducer(state, {
        type: sessionActions.createUserFailure.type,
        payload: { reason },
      });
      state.should.haveOwnProperty("userCreationStatus", reason);
    });

    it("sets status to SUCCESS if the creation succeeds", function () {
      state = sessionReducer(state, {
        type: sessionActions.createUserSuccess.type,
      });
      state.should.haveOwnProperty(
        "userCreationStatus",
        UserCreationStatuses.SUCCESS
      );
    });
  });

  describe("Band Modifications", function () {
    it("adds a new entry to the bands modified when there's been a successful band modification action dispatched to the store", function () {
      let modifiedBandId = "bandId";
      let modificationValue = 1;
      let state = sessionReducer(undefined, {
        type: bandActions.modifyBandScoreSuccess.type,
        payload: { modifiedBandId, modificationValue },
      });

      state.should.haveOwnProperty("bandsModified");
      state.bandsModified.some(
        (modification) =>
          modification.targetBandId == modifiedBandId &&
          modification.value == modificationValue
      ).should.be.true;
    });
  });
});

import httpMocks from "node-mocks-http";
import sinon from "sinon";
import { User } from "../models";
import { UserCreationStatuses } from "../../app/store/statuses";
import { postCreateUser } from "./user-creation";
describe("User Creation", function () {
  beforeEach(function () {
    sinon.stub(User, "exists");
  });

  afterEach(function () {
    User.exists.restore();
  });

  it("should respond with a code of 200 when provided with an unused username, and any password", async function () {
    let req = httpMocks.createRequest({
      body: {
        username: "NewUsername",
        password: "AnyPassword",
      },
    });
    let res = httpMocks.createResponse();

    User.exists.resolves(false);

    await postCreateUser(req, res);

    res.statusCode.should.equal(200, "response's status code should be 200");
  });

  it("should respond with a code of 401 and corresponding reason when provided with an existing username, and any password", async function () {
    let req = httpMocks.createRequest({
      body: {
        username: "ExistingUsername",
        password: "AnyPassword",
      },
    });
    let res = httpMocks.createResponse();

    User.exists.resolves(true);

    await postCreateUser(req, res);

    res.statusCode.should.equal(401, "response's status code should be 401");
    res
      ._getData()
      .reason.should.equal(
        UserCreationStatuses.USERNAME_TAKEN,
        "response's data should have a 'reason' property equal to the USERNAME_TAKEN constant"
      );
  });
});

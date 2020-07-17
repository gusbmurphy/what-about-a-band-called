import httpMocks from "node-mocks-http";
import sinon from "sinon";
import { User } from "../models";
import { UserCreationStatuses } from "../../app/store/statuses";
import { postCreateUser } from "./user-creation";

describe("User Creation", function () {
  let userExistsStub;
  let existingUsername = "ExistingUsername";
  let existingEmail = "ExistingEmail";

  before(function () {
    userExistsStub = sinon.stub(User, "exists");
    userExistsStub.resolves(false);
    userExistsStub.withArgs(existingUsername).resolves(true);
    userExistsStub.withArgs(existingEmail).resolves(true);
  });

  after(function () {
    userExistsStub.restore();
  });

  it("should respond with a code of 200 when provided with an unused username, unused email, and any password", async function () {
    let req = httpMocks.createRequest({
      body: {
        username: "NewUsername",
        password: "AnyPassword",
        email: "NewEmail",
      },
    });
    let res = httpMocks.createResponse();

    await postCreateUser(req, res);

    res.statusCode.should.equal(200, "response's status code should be 200");
  });

  it("should respond with a code of 409 and corresponding reason when provided with an existing username, and any password", async function () {
    let req = httpMocks.createRequest({
      body: {
        username: existingUsername,
        password: "AnyPassword",
        email: "NewEmail",
      },
    });
    let res = httpMocks.createResponse();

    User.exists.resolves(true);

    await postCreateUser(req, res);

    res.statusCode.should.equal(409, "response's status code should be 401");
    res
      ._getData()
      .reason.should.equal(
        UserCreationStatuses.USERNAME_TAKEN,
        "response's data should have a 'reason' property equal to the USERNAME_TAKEN constant"
      );
  });

  it("should respond with a code of 409 and corresponding reason when provided with an existing email address", async function () {
    let req = httpMocks.createRequest({
      body: {
        username: "SomeUsername",
        password: "AnyPassword",
        email: existingEmail,
      },
    });
    let res = httpMocks.createResponse();

    await postCreateUser(req, res);

    res.statusCode.should.equal(409, "response's status code should be 401");
    res
      ._getData()
      .reason.should.equal(
        UserCreationStatuses.USERNAME_TAKEN,
        "response's data should have a 'reason' property equal to the USERNAME_TAKEN constant"
      );
  });
});

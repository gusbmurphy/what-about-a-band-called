import httpMocks from "node-mocks-http";
import sinon from "sinon";
import md5 from "md5";
import { ObjectId } from "mongodb";
import { User } from "../models";
import { AuthenticationStatuses } from "../../app/store/statuses";
import { postUserAuthenticate } from "./user-authentication";

describe.skip("User Authentication", function () {
  // TODO: These tests needs to be rewritten
  beforeEach(function () {
    sinon.stub(User, "findOne");
  });

  afterEach(function () {
    User.findOne.restore();
  });

  it("should respond with a code of 200 and the user's ObjectId, username, and an array of band id's they've modified if provided with a correct username and password", async function () {
    let password = "CorrectPassword";
    let username = "ExistingUsername";
    let bandsModified = ["band1", "band2"];
    let req = httpMocks.createRequest({
      body: {
        username,
        password,
      },
    });
    let res = httpMocks.createResponse();

    // Since findOne() will be chained with exec(), we need to return a
    // dummy exec function that passes a dummy user object
    User.findOne.returns({
      exec: function (cb) {
        cb(null, {
          _id: new ObjectId(),
          name: username,
          passwordHash: md5(password),
          bandsModified,
        });
      },
    });

    await postUserAuthenticate(req, res);

    res.statusCode.should.equal(200, "status code should be 200");
    let isObjectId = ObjectId.isValid(res._getData().userId);
    isObjectId.should.equal(true, "returned user ID should be an ObjectId");
    res
      ._getData()
      .should.haveOwnProperty(
        "username",
        username,
        "response should have a username property"
      );
    res
      ._getData()
      .should.haveOwnProperty(
        "bandsModified",
        bandsModified,
        "response should have a bandsModified property"
      );
  });

  it("should respond with a status of 500 and INVALID_USERNAME reason if provided with a username that doesn't exist", async function () {
    let req = httpMocks.createRequest({
      body: {
        username: "NonexistantUsername",
        password: "APassword",
      },
    });
    let res = httpMocks.createResponse();

    User.findOne.returns({
      exec: function (cb) {
        cb(null, null);
      },
    });

    await postUserAuthenticate(req, res);

    res.statusCode.should.equal(500, "status code should be 500");
    res
      ._getData()
      .should.haveOwnProperty(
        "reason",
        AuthenticationStatuses.INVALID_USERNAME,
        "response should have the appropriate reason"
      );
  });

  it("should respond with a status of 500 and INVALID_PASSWORD reason if provided with an existing username but incorrect password", async function () {
    let req = httpMocks.createRequest({
      body: {
        username: "ExistingUsername",
        password: "WrongPassword",
      },
    });
    let res = httpMocks.createResponse();

    User.findOne.returns({
      exec: function (cb) {
        cb(null, {
          passwordHash: md5("CorrectPassword"),
        });
      },
    });

    await postUserAuthenticate(req, res);

    res.statusCode.should.equal(500, "status code should be 500");
    res
      ._getData()
      .should.haveOwnProperty(
        "reason",
        AuthenticationStatuses.INVALID_PASSWORD,
        "response should be INVALID_PASSWORD"
      );
  });
});

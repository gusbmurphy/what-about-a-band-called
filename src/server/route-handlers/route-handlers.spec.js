import "chai/register-should";
import httpMocks from "node-mocks-http";
import sinon from "sinon";
import md5 from "md5";
import { ObjectId } from "mongodb";
import { Model } from "mongoose";

import { User } from "../models";
import { Band, BandModification } from "../models";
import {
  UserCreationStatuses,
  BandCreationStatuses,
} from "../../app/store/action-types";
import { postCreateUser } from "../route-handlers/user-creation";
import { postUserAuthenticate } from "../route-handlers/authentication";
import { postNewBand, postModifyBand } from "../route-handlers/bands";

describe("Route Handler Component Tests", function () {
  describe("Band Retrieval", function () {
    it("retrieves all bands");
  });

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

    it("should respond with a code of 500 and corresponding reason when provided with an existing username, and any password", async function () {
      let req = httpMocks.createRequest({
        body: {
          username: "ExistingUsername",
          password: "AnyPassword",
        },
      });
      let res = httpMocks.createResponse();

      User.exists.resolves(true);

      await postCreateUser(req, res);

      res.statusCode.should.equal(500, "response's status code should be 500");
      res
        ._getData()
        .reason.should.equal(
          UserCreationStatuses.USERNAME_TAKEN,
          "response's data should have a 'reason' property equal to the USERNAME_TAKEN constant"
        );
    });
  });

  describe("User Authentication", function () {
    beforeEach(function () {
      sinon.stub(User, "findOne");
    });

    afterEach(function () {
      User.findOne.restore();
    });

    it("should respond with a code of 200 and the user's ObjectId if provided with a correct username and password", async function () {
      let password = "CorrectPassword";
      let req = httpMocks.createRequest({
        body: {
          username: "ExistingUsername",
          password,
        },
      });
      let res = httpMocks.createResponse();

      // Since findOne() will be chained with exec(), we need to return a
      // dumby exec function that passes a dumby user object
      User.findOne.returns({
        exec: function (cb) {
          cb(null, {
            _id: new ObjectId(),
            passwordHash: md5(password),
          });
        },
      });

      await postUserAuthenticate(req, res);

      res.statusCode.should.equal(200, "status code should be 200");
      let isObjectId = ObjectId.isValid(res._getData().userId);
      isObjectId.should.equal(true, "returned user ID should be an ObjectId");
    });

    it("should respond with a status of 500 if provided with a username that doesn't exist", async function () {
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
    });

    it("should respond with a status of 500 if provided with an existing username but incorrect password", async function () {
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
    });
  });

  describe("Band Creation", function () {
    beforeEach(function () {
      sinon.stub(Band, "exists");
      sinon.stub(Model.prototype, "save");
    });

    afterEach(function () {
      Band.exists.restore();
      Model.prototype.save.restore();
    });

    it("should call 'Band.exists()' to see if the band already exists", async function () {
      let req = httpMocks.createRequest({
        body: {
          bandName: "OldBand",
          creatingUserId: ObjectId(),
        },
      });
      let res = httpMocks.createResponse();

      Band.exists.resolves(true);

      await postNewBand(req, res);

      Band.exists.calledOnce.should.equal(
        true,
        "Band.exists should be called once"
      );
    });

    it("should respond with a status code of 500 and a reason of 'BAND_EXISTS' if there is already a band with that name", async function () {
      let req = httpMocks.createRequest({
        body: {
          bandName: "OldBand",
          creatingUserId: ObjectId(),
        },
      });
      let res = httpMocks.createResponse();

      Band.exists.resolves(true);

      await postNewBand(req, res);

      res.statusCode.should.equal(500, "status code should be 500");
      res
        ._getData()
        .reason.should.equal(
          BandCreationStatuses.BAND_EXISTS,
          "response data should have a reason property equal to BAND_EXISTS"
        );
    });

    it("should respond with a status code of 200 if there is no band with that name", async function () {
      let req = httpMocks.createRequest({
        body: {
          bandName: "NewBand",
          creatingUserId: ObjectId(),
        },
      });
      let res = httpMocks.createResponse();

      Model.prototype.save.yields(null); // .save() should not yield an error for it's callback
      Band.exists.resolves(false);

      await postNewBand(req, res);

      res.statusCode.should.equal(200, "status code should be 200");
    });

    it("should save the new band if appropriate", async function () {
      let req = httpMocks.createRequest({
        body: {
          bandName: "NewBand",
          creatingUserId: ObjectId(),
        },
      });
      let res = httpMocks.createResponse();

      Model.prototype.save.yields(null);
      Band.exists.resolves(false);

      await postNewBand(req, res);

      Model.prototype.save.calledOnce.should.equal(
        true,
        ".save() should be called once"
      );
    });
  });

  describe("Band Modification", function () {
    beforeEach(function () {
      sinon.stub(Band, "exists");
      sinon.stub(BandModification, "exists");
      sinon.stub(Band, "findOneAndUpdate");
      sinon.stub(Model.prototype, "save");
    });

    afterEach(function () {
      Band.exists.restore();
      BandModification.exists.restore();
      Band.findOneAndUpdate.restore();
      Model.prototype.save.restore();
    });

    it("should respond with a code of 500 if the target band doesn't exist", async function () {
      let req = httpMocks.createRequest({
        body: {
          targetBandId: "nonexistant",
          modifiyingUserId: "someuser",
          modificationValue: 1,
        },
      });
      let res = httpMocks.createResponse();

      Band.exists.resolves(false);

      await postModifyBand(req, res);

      res.statusCode.should.equal(500, "status code should be 500");
    });

    it("should respond with a code of 500 if the user has already modified the band", async function () {
      let req = httpMocks.createRequest({
        body: {
          targetBandId: "someband",
          modifiyingUserId: "someuser",
          modificationValue: 1,
        },
      });
      let res = httpMocks.createResponse();

      Band.exists.resolves(true);
      BandModification.exists.resolves(true);

      await postModifyBand(req, res);

      res.statusCode.should.equal(500, "status code should be 500");
    });

    it("if the modification is valid, 'Band.findOneAndUpdate()' should be called, and then a BandModification should be saved", async function () {
      let req = httpMocks.createRequest({
        body: {
          targetBandId: "someband",
          modifiyingUserId: "someuser",
          modificationValue: 1,
        },
      });
      let res = httpMocks.createResponse();

      Band.exists.resolves(true);
      BandModification.exists.resolves(false);
      Band.findOneAndUpdate.yields(null);
      Model.prototype.save.yields(null);

      await postModifyBand(req, res);

      Band.findOneAndUpdate.calledOnce.should.equal(
        true,
        ".findOneAndUpdate() should be called once"
      );
      Model.prototype.save.calledOnce.should.equal(
        true,
        ".save() should be called once"
      );
      res.statusCode.should.equal(200, "status code should be 200");
    });
  });
});

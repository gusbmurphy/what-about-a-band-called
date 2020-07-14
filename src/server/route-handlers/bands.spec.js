import httpMocks from "node-mocks-http";
import sinon from "sinon";
import { ObjectId } from "mongodb";
import { Model } from "mongoose";
import { Band, BandModification } from "../models";
import { BandCreationStatuses } from "../../app/store/statuses";
import { postNewBand, postModifyBand } from "./bands";

describe("Band Routes", function () {
  describe("Band Retrieval", function () {
    it("retrieves all bands");
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

    it(
      "should finally update the modifying user's array of bands they've modified"
    );
  });
});

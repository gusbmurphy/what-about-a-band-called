import { assert, expect } from "chai";
let chai = require("chai");
let should = require("chai").should();
import httpMocks from "node-mocks-http";
import sinon from "sinon";

import { User } from "../models";
import { UserCreationStatuses } from "../../app/store/action-types";
import { postCreateUser } from "../route-handlers/user-creation";

describe("Route Handlers", function () {

    describe("User Creation", function () {

        beforeEach(function () {
            sinon.stub(User, "exists");
        });

        afterEach(function () {
            User.exists.restore();
        });

        it("should respond with a code of 200 when provided with an unused username, and any password");

        it("should respond with a code of 500 when provided with an existing username, and any password", async function (done) {
            this.timeout(10000);

            let req = httpMocks.createRequest({
                method: "POST",
                url: "/create-user",
                body: {
                    username: "ExistingUser",
                    password: "AnyPassword"
                }
            });
            let res = httpMocks.createResponse();

            User.exists.resolves(true);

            await postCreateUser(req, res);
            res.status.should.equal(500);
            done();
        });

    });

    describe("User Authentication", function () {

        it("should respond with a code of 200 and the user's ObjectId if provided with a correct username and password");

        it("should respond with a status of 500 if provided with a username that doesn't exist");

        it("should respond with a status of 500 if provided with an existing username but incorrect password");

    });
});
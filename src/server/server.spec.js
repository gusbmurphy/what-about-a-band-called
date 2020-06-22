import { assert, expect } from "chai";
let chai = require("chai");
let should = require('chai').should();
let chaiHttp = require("chai-http");

import { UserCreationStatuses } from "../app/store/action-types";
import { app } from "./server";

chai.use(chaiHttp);

describe("Server Routes", function () {
    describe("User Creation", function () {
        it.skip("should respond with a code of 200 when provided with an unused username, and any password", function (done) {
            chai.request(app)
                .post("/create-user")
                .send({
                    username: username1,
                    password1
                })
                .end(function (err, res) {
                    should.not.exist(err);
                    res.status.should.equal(200);
                });
            done();
        });
        it("should respond with a code of 500 when provided with an existing username, and any password");
    });

    describe("User Authentication", function() {
        it("should respond with a code of 200 and the user's ObjectId if provided with a correct username and password");
        it("should respond with a status of 500 if provided with a username that doesn't exist");
        it("should respond with a status of 500 if provided with an existing username but incorrect password");
    });
});
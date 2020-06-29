import 'chai/register-should';
import sinon from "sinon";
import { shallow, mount } from "enzyme";
import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { BandList } from "./BandList";
import { Login } from "./Login";
import { CreateBand } from "./CreateBand";
import { AuthenticationStatuses, CREATE_BAND_BEGIN } from "../store/action-types";
import {
  beginFetchBands,
  beginModifyBandScore,
  beginBandCreation
} from "../store/action-creators";

const mockStore = configureStore([]);

describe("React Component Unit Tests", function () {
  describe("Band List", function () {
    let mockBands = {
      items: [
        { _id: "bandId1", name: "Band1", ownerId: "userId1", score: 0 },
        { _id: "bandId2", name: "Band2", ownerId: "userId2", score: 0 },
      ],
    };

    it("dispatches an action to begin fetching bands on mount", function () {
      let store = mockStore({
        bands: { items: [] },
        authenticationStatus: AuthenticationStatuses.NOT_TRYING,
        userId: null,
      });

      let dispatchStub = sinon.stub(store, "dispatch");

      mount(
        <Provider store={store}>
          <BandList />
        </Provider>
      );

      dispatchStub.calledOnceWith(beginFetchBands()).should.equal(true);
      dispatchStub.restore();
    });

    it("renders a div with the class 'bandList'", function () {
      let store = mockStore({
        bands: { items: [] },
        authenticationStatus: AuthenticationStatuses.NOT_TRYING,
        userId: null,
      });
      let wrapper = mount(
        <Provider store={store}>
          <BandList />
        </Provider>
      );

      wrapper.find("div.bandList").should.have.lengthOf(1);
    });

    it("renders one div with the class 'bandListing' for every band in the state", function () {
      let store = mockStore({
        bands: mockBands,
        authenticationStatus: AuthenticationStatuses.AUTHENTICATED,
        userId: null,
      });
      let wrapper = mount(
        <Provider store={store}>
          <BandList />
        </Provider>
      );

      wrapper
        .find("div.bandList")
        .find("div.bandListing")
        .should.have.lengthOf(mockBands.items.length);
    });

    it("should display buttons with classes 'incScoreButton' and 'decScoreButton' to modify a band's score if the user status is AUTHENTICATED", function () {
      let store = mockStore({
        bands: mockBands,
        authenticationStatus: AuthenticationStatuses.AUTHENTICATED,
        userId: null,
      });
      let wrapper = mount(
        <Provider store={store}>
          <BandList />
        </Provider>
      );

      wrapper
        .find("div.bandList")
        .find("div.bandListing")
        .forEach((node) => {
          node.find("button.incScoreButton").should.have.lengthOf(1);
          node.find("button.decScoreButton").should.have.lengthOf(1);
        });
    });

    it("dispatches an action to modify a band when a band modification button is pressed", function () {
      let store = mockStore({
        bands: {
          items: [
            { _id: "bandId1", name: "Band1", ownerId: "userId1", score: 0 },
          ],
        },
        authenticationStatus: AuthenticationStatuses.AUTHENTICATED,
        userId: "userId3",
      });

      let dispatchSpy = sinon.spy(store, "dispatch");

      let wrapper = mount(
        <Provider store={store}>
          <BandList />
        </Provider>
      );

      wrapper
        .find("div.bandList")
        .find("div.bandListing")
        .first()
        .find("button.incScoreButton")
        .simulate("click");
      wrapper
        .find("div.bandList")
        .find("div.bandListing")
        .first()
        .find("button.decScoreButton")
        .simulate("click");

      dispatchSpy.calledWith(beginModifyBandScore("bandId1", "userId3", 1))
        .should.be.true;
      dispatchSpy.calledWith(beginModifyBandScore("bandId1", "userId3", -1))
        .should.be.true;

      dispatchSpy.restore();
    });
  });

  describe("Login", function () {
    it("has a form with the class 'loginForm', with username and password text inputs", function () {
      let store = mockStore({
        session: { authenticationStatus: AuthenticationStatuses.NOT_TRYING },
      });

      let wrapper = mount(
        <Provider store={store}>
          <Login />
        </Provider>
      );

      let formWrapper = wrapper.find("form.loginForm");
      formWrapper.should.have.lengthOf(1);
      formWrapper.find("input[name='username']").should.have.lengthOf(1);
      formWrapper.find("input[name='password']").should.have.lengthOf(1);
    });

    it("alerts the user when an attempt to authenticate is being made", function () {
      let store = mockStore({
        session: {
          authenticationStatus: AuthenticationStatuses.AUTHENTICATING,
        },
      });

      let wrapper = mount(
        <Provider store={store}>
          <Login />
        </Provider>
      );

      wrapper.find("div.loginStatus").text().should.equal("Authenticating...");
    });

    it("alerts the user when they have successfully logged in", function () {
      let store = mockStore({
        session: {
          authenticationStatus: AuthenticationStatuses.AUTHENTICATED,
        },
      });

      let wrapper = mount(
        <Provider store={store}>
          <Login />
        </Provider>
      );

      wrapper.find("div.loginStatus").text().should.equal("Logged in!");
    });

    it("alerts the user when a log in attempt has failed because the username was not found", function () {
      let store = mockStore({
        session: {
          authenticationStatus: AuthenticationStatuses.INVALID_USERNAME,
        },
      });

      let wrapper = mount(
        <Provider store={store}>
          <Login />
        </Provider>
      );

      wrapper
        .find("div.loginStatus")
        .text()
        .should.equal("Username not found.");
    });

    it("alerts the user when a log in attempt has failed because the password was incorrect", function () {
      let store = mockStore({
        session: {
          authenticationStatus: AuthenticationStatuses.INVALID_PASSWORD,
        },
      });

      let wrapper = mount(
        <Provider store={store}>
          <Login />
        </Provider>
      );

      wrapper
        .find("div.loginStatus")
        .text()
        .should.equal("Incorrect password.");
    });
  });

  describe.skip("Create Band", function () {
    afterEach(function() {
      sinon.restore()
    });

    it("has a button that when clicked dispatches an action to create a new band if the user is logged in", function () {
      let store = mockStore({
        session: {
          userId: "userId1",
          authenticationStatus: AuthenticationStatuses.AUTHENTICATED,
        },
      });

      let wrapper = mount(
        <Provider store={store}>
          <CreateBand />
        </Provider>
      );

      let dispatchSpy = sinon.spy(store, "dispatch");

      let buttonWrapper = wrapper.find(".createBandButton");
      buttonWrapper.should.have.lengthOf(1);

      // let bandNameInputWrapper = wrapper.find("input[name='band-name']");
      // bandNameInputWrapper.should.have.lengthOf(1);
      let getElementStub = sinon.stub(document, "getElementById").withArgs("band-name");
      getElementStub.returns({
        value: "BandName"
      });

      buttonWrapper.simulate("click");
      getElementStub.called.should.be.true;
      dispatchSpy.calledWith(beginBandCreation("userId1", "BandName")).should.be.true;
    });

    it(
      "alerts the user that they are not logged in if they attempt to create a band while not logged in"
    );
  });
});

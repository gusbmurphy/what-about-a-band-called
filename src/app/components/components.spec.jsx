import "chai/register-should";
import sinon from "sinon";
import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { BandList } from "./BandList";
import { Login } from "./Login";
import { NewUser } from "./NewUser";
import { CreateBand } from "./CreateBand";
import {
  AuthenticationStatuses,
  UserCreationStatuses,
} from "../store/action-types";
import {
  beginFetchBands,
  beginModifyBandScore,
  beginBandCreation,
  createUserFailure,
} from "../store/action-creators";

const mockStore = configureStore([]);

describe("React Component Component/Unit Tests", function () {
  describe.skip("Band List", function () {
    let mockBands = {
      items: [
        { _id: "bandId1", name: "Band1", ownerId: "userId1", score: 0 },
        { _id: "bandId2", name: "Band2", ownerId: "userId2", score: 0 },
      ],
    };

    it("dispatches an action to begin fetching bands on mount", function () {
      let store = mockStore({
        bands: { items: [] },
        session: {
          authenticationStatus: AuthenticationStatuses.NOT_TRYING,
          userId: null,
        },
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
        session: {
          authenticationStatus: AuthenticationStatuses.NOT_TRYING,
          userId: null,
        },
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
        session: {
          authenticationStatus: AuthenticationStatuses.AUTHENTICATED,
          userId: null,
        },
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
        session: {
          authenticationStatus: AuthenticationStatuses.AUTHENTICATED,
          userId: null,
        },
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
      let userId = "userId3";
      let store = mockStore({
        bands: {
          items: [
            { _id: "bandId1", name: "Band1", ownerId: "userId1", score: 0 },
          ],
        },
        session: {
          authenticationStatus: AuthenticationStatuses.AUTHENTICATED,
          userId,
        },
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

      dispatchSpy.calledWith(beginModifyBandScore("bandId1", userId, 1)).should
        .be.true;
      dispatchSpy.calledWith(beginModifyBandScore("bandId1", userId, -1)).should
        .be.true;

      dispatchSpy.restore();
    });
  });

  describe.skip("Individual Band Listing", function () {
    it("takes an object representing a band");
    it("displays the band name");
    it("displays the points a band has");
    it("displays the band's creator");
    it("displays buttons for adding/subtracting score");
  })

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

  describe("New User", function () {
    let wrapper,
      formWrapper,
      nameInputWrapper,
      pwInputWrapper,
      pwRepeatInputWrapper,
      alertWrapper,
      store;

    it("has a form with class 'newUserForm', with username, password and password repeat text inputs", function () {
      store = mockStore({
        session: {
          userCreationStatus: UserCreationStatuses.NOT_TRYING,
        },
      });

      wrapper = mount(
        <Provider store={store}>
          <NewUser />
        </Provider>
      );

      formWrapper = wrapper.find("form.newUserForm");
      formWrapper.should.have.lengthOf(1);

      nameInputWrapper = formWrapper.find("input[name='username']");
      nameInputWrapper.should.have.lengthOf(1);

      pwInputWrapper = formWrapper.find("input[name='password']");
      pwInputWrapper.should.have.lengthOf(1);

      pwRepeatInputWrapper = formWrapper.find("input[name='repeat-password']");
      pwRepeatInputWrapper.should.have.lengthOf(1);
    });

    it("hides the text entered into the password fields", function () {
      pwInputWrapper.prop("type").should.equal("password");
      pwRepeatInputWrapper.prop("type").should.equal("password");
    });

    it("has an element that displays information regarding the process", function () {
      alertWrapper = wrapper.find("div.processAlert");
      alertWrapper.should.have.lengthOf(1);
    });

    let password = "password1";
    let notPassword = "psdfsdfg";
    let userName = "name1";

    it("should not allow a submission with any field left blank");

    it.skip("when the password and repeated password do not match a user creation failure action is dispatched", function () {
      // There seems to be problems with Enzyme regarding event propagation that makes accomplishing this very difficult!
      nameInputWrapper.getDOMNode().value = userName;
      pwInputWrapper.getDOMNode().value = password;
      pwRepeatInputWrapper.getDOMNode().value = notPassword;

      console.log(nameInputWrapper.props().value);

      let dispatchSpy = sinon.spy(store, "dispatch");

      formWrapper.simulate("submit");
      dispatchSpy.calledOnce.should.equal(
        true,
        "dispatch should be called once"
      );
      dispatchSpy.firstCall.args.should.deep.include(
        createUserFailure(UserCreationStatuses.PASSWORDS_DONT_MATCH),
        "the dispatch call should be with a user creation failure action"
      );

      dispatchSpy.restore();
    });

    it("dispatches a user creation action if the passwords match");
    it("informs the user that an attempt is being made to create the account");
    it("informs the user if the username is already taken");
    it("informs the user if there was a server error");
  });

  describe.skip("Create Band", function () {
    afterEach(function () {
      sinon.restore();
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
      let getElementStub = sinon
        .stub(document, "getElementById")
        .withArgs("band-name");
      getElementStub.returns({
        value: "BandName",
      });

      buttonWrapper.simulate("click");
      getElementStub.called.should.be.true;
      dispatchSpy.calledWith(beginBandCreation("userId1", "BandName")).should.be
        .true;
    });

    it(
      "alerts the user that they are not logged in if they attempt to create a band while not logged in"
    );
  });
});

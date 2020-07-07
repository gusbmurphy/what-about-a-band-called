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
  BandSortTypes,
} from "../store/action-types";
import {
  beginBandCreation,
  createUserFailure,
  requestFetchBands,
} from "../store/action-creators";
import { createMockBands } from "../../utility/mock-bands";
import BandListing from "./BandListing";

const mockStore = configureStore([]);

describe("React Component Component/Unit Tests", function () {
  describe("Band List", function () {
    let maxBands = 15;
    let sortBy = BandSortTypes.BEST;
    let store = mockStore({
      bands: { items: createMockBands(30), pendingFetches: 0 },
      session: {
        authenticationStatus: AuthenticationStatuses.NOT_AUTHENTICATED,
        userId: null,
      },
    });
    let storeSpy = sinon.spy(store, "dispatch");
    let wrapper = mount(
      <Provider store={store}>
        <BandList maxBands={maxBands} sortBy={sortBy} />
      </Provider>
    );

    it("dispatches a request to fetch bands with the parameters provided to props on mount", function () {
      storeSpy.calledOnceWith(requestFetchBands(maxBands, sortBy)).should.be
        .true;
    });

    it("renders just a div with the class '.loadingMessage' if the app is still fetching bands", function () {
      let loadingStore = mockStore({
        bands: { items: [], pendingFetches: 2 },
        session: {
          authenticationStatus: AuthenticationStatuses.NOT_AUTHENTICATED,
          userId: null,
        },
      });
      let loadingWrapper = mount(
        <Provider store={loadingStore}>
          <BandList maxBands={maxBands} sortBy={sortBy} />
        </Provider>
      );

      loadingWrapper.find("div.loadingMessage").should.have.lengthOf(1);
      loadingWrapper.find("div.bandList").should.have.lengthOf(0);
    });

    it("renders a div with the class 'bandList' if the app is not fetching bands", function () {
      wrapper.find("div.bandList").should.have.lengthOf(1);
    });

    it("renders one div with the class 'bandListing' for the maximum number of bands", function () {
      wrapper
        .find("div.bandList")
        .find("div.bandListing")
        .should.have.lengthOf(maxBands);
    });

    it("correctly sorts the bands by highest score");
    it("correctly sorts the bands by lowest score");
    it("correctly sorts the bands by latest date");
  });

  describe.only("Individual Band Listing", function () {
    let bandName = "bandName";
    let bandId = "1234";
    let bandScore = 32;
    let bandCreatorName = "creatorName";

    let wrapper = mount(
      <BandListing
        bandId={bandId}
        bandName={bandName}
        bandScore={bandScore}
        bandCreatorName={bandCreatorName}
        userIsAuthenticated={true}
      />
    );
    let divWrapper = wrapper.find("div.bandListing");

    it("renders a div with the class 'bandListing'", function () {
      divWrapper.should.have.lengthOf(1);
    });

    it("displays the band name", function () {
      divWrapper.text().should.contain(bandName);
    });

    it("displays the points the band has", function () {
      divWrapper.text().should.contain(bandScore);
    });

    it("displays the band's creator", function () {
      divWrapper.text().should.contain(bandCreatorName);
    });

    it("has a button for adding score", function () {
      divWrapper.find("button.incScoreButton").should.have.lengthOf(1);
    });

    it("has a button for adding score", function () {
      divWrapper.find("button.decScoreButton").should.have.lengthOf(1);
    });

    it("has the buttons disabled if the user is not logged in", function () {
      let notAuthenticatedWrapper = mount(
        <BandListing
          bandId={bandId}
          bandName={bandName}
          bandScore={bandScore}
          bandCreatorName={bandCreatorName}
          userIsAuthenticated={false}
        />
      );

      let buttonsWrapper = notAuthenticatedWrapper.find("div.bandListing").find("button");
      buttonsWrapper.should.have.lengthOf(2);
    });

    it("disables the increment button if the user has added points to the band");
    it("disables the decrement button if the user has subtracted points from the band");
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

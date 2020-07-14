import sinon from "sinon";
import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { AuthenticationStatuses } from "../store/statuses";
import { NewUser } from "./NewUser";
import { CreateBand } from "./CreateBand";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

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
    dispatchSpy.calledOnce.should.equal(true, "dispatch should be called once");
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
describe("Create Band", function () {
  afterEach(function () {
    sinon.restore();
  });

  it.skip("has a button that when clicked dispatches an action to create a new band if the user is logged in", function () {
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

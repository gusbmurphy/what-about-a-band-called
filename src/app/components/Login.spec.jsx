import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { AuthenticationStatuses } from "../store/statuses";
import { Login } from "./Login";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

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

    wrapper.find("div.loginStatus").text().should.equal("Username not found.");
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

    wrapper.find("div.loginStatus").text().should.equal("Incorrect password.");
  });
});

import React from "react";
import { connect } from "react-redux";

import { AuthenticationStatuses } from "../store/action-types";
import { beginAuthenticateUser } from "../store/action-creators";

const UnconnectedLogin = ({ authenticateUser, authenticationStatus }) => (
  <div>
    <h2>Please Login</h2>
    <form onSubmit={authenticateUser}>
      <input type="text" placeholder="Username" name="username" />
      <input type="text" placeholder="Password" name="password" />
      {authenticationStatus === AuthenticationStatuses.NOT_AUTHENTICATED ? (
        <p>Login incorrect.</p>
      ) : null}
      <button type="submit">Login</button>
    </form>
  </div>
);

const mapStateToProps = ({ session }) => ({
  authenticationStatus: session.authenticationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  authenticateUser(e) {
    e.preventDefault();
    let username = e.target["username"].value;
    let password = e.target["password"].value;
    dispatch(beginAuthenticateUser(username, password));
  },
});

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedLogin);

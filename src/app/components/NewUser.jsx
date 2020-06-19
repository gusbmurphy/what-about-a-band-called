import React from "react";
import { connect } from "react-redux";

import { beginCreateUser, createUserFailure } from "../store/action-creators";
import { UserCreationStatuses } from "../store/action-types";

const UnconnectedNewUser = ({ tryCreateUser, userCreationStatus }) => (
  <div>
    <h2>Create new user</h2>
    <form onSubmit={tryCreateUser}>
      <input type="text" placeholder="Username" name="username" />
      <input type="text" placeholder="Password" name="password" />
      <input type="text" placeholder="Repeat password" name="repeat-password" />
      <button type="submit">Login</button>
    </form>
    <p>{userCreationStatus}</p>
  </div>
);

const mapStateToProps = ({ session }) => ({
  userCreationStatus: session.userCreationStatus
});

const mapDispatchToProps = (dispatch) => ({
  tryCreateUser(e) {
    e.preventDefault();
    let username = e.target["username"].value;
    let password = e.target["password"].value;
    let repeatPassword = e.target["repeat-password"].value;
    if (password == repeatPassword) {
      dispatch(beginCreateUser(username, password));
    } else {
      dispatch(createUserFailure(UserCreationStatuses.PASSWORDS_DONT_MATCH));
    }
  },
});

export const NewUser = connect(
    mapStateToProps,
    mapDispatchToProps
  )(UnconnectedNewUser);

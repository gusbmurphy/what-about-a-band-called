import React from "react";
import { connect } from "react-redux";

import { beginCreateUser, createUserFailure } from "../store/action-creators";
import { UserCreationStatuses } from "../store/action-types";

class UnconnectedNewUser extends React.Component {
  render() {
    let { tryCreateUser, userCreationStatus } = this.props;

    return (
      <div>
        <h2>Create new user</h2>
        <form onSubmit={tryCreateUser} className="newUserForm">
          <input type="text" placeholder="Username" name="username" />
          <input type="password" placeholder="Password" name="password" />
          <input
            type="password"
            placeholder="Repeat password"
            name="repeat-password"
          />
          <button type="submit">Submit</button>
        </form>
        <div className="processAlert">{userCreationStatus}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ session }) => ({
  userCreationStatus: session.userCreationStatus,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  tryCreateUser(e) {
    e.preventDefault();
    let username = e.target["username"].value;
    let password = e.target["password"].value;
    let repeatPassword = e.target["repeat-password"].value;
    if (username.length == 0 || password.length == 0 || repeatPassword.length == 0) {
      return dispatch(createUserFailure(UserCreationStatuses.EMPTY_FIELDS));
    }
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
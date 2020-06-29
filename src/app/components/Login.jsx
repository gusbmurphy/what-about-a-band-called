import React from "react";
import { connect } from "react-redux";

import { AuthenticationStatuses } from "../store/action-types";
import { beginAuthenticateUser } from "../store/action-creators";

// const UnconnectedLogin = ({ authenticateUser, authenticationStatus }) => (
//   <div>
//     <h2>Please Login</h2>
//     <form onSubmit={authenticateUser} className="loginForm">
//       <input type="text" placeholder="Username" name="username" />
//       <input type="text" placeholder="Password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//     <div className="loginStatus"></div>
//   </div>
// );

class UnconnectedLogin extends React.Component {
  getStatusText(status) {
    switch (status) {
      case AuthenticationStatuses.AUTHENTICATED:
        return "Logged in!";
      case AuthenticationStatuses.AUTHENTICATING:
        return "Authenticating...";
      case AuthenticationStatuses.INVALID_USERNAME:
        return "Username not found.";
      case AuthenticationStatuses.INVALID_PASSWORD:
        return "Incorrect password.";
      case AuthenticationStatuses.NOT_AUTHENTICATED:
      case AuthenticationStatuses.NOT_TRYING:
        return "";
      case AuthenticationStatuses.SERVER_ERROR:
        return "Server error.";
      default:
        return "?";
    }
  }

  render() {
    let { authenticateUser, authenticationStatus } = this.props;

    return (
      <div>
        <h2>Please Login</h2>
        <form onSubmit={authenticateUser} className="loginForm">
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Password" name="password" />
          <button type="submit">Login</button>
        </form>
        <div className="loginStatus">
          {this.getStatusText(authenticationStatus)}
        </div>
      </div>
    );
  }
}

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

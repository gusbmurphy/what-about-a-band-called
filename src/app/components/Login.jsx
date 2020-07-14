import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { AuthenticationStatuses } from "../store/actions/types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { sessionActions } from "../store/slices/session-slice";

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
      // <div>
      //   <h2>Please Login</h2>
      //   <form onSubmit={authenticateUser} className="loginForm">
      //     <input type="text" placeholder="Username" name="username" />
      //     <input type="password" placeholder="Password" name="password" />
      //     <button type="submit">Login</button>
      //   </form>
      //   <div className="loginStatus">
      //     {this.getStatusText(authenticationStatus)}
      //   </div>
      // </div>
      <Container>
        <Form>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" />
            <Form.Text className="text-muted">
              New user? Create an account <a href="/new-user">here</a>.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

UnconnectedLogin.propTypes = {
  authenticateUser: PropTypes.func,
  authenticationStatus: PropTypes.oneOf(Object.values(AuthenticationStatuses)),
};

const mapStateToProps = ({ session }) => ({
  authenticationStatus: session.authenticationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  authenticateUser(e) {
    e.preventDefault();
    let username = e.target["username"].value;
    let password = e.target["password"].value;
    dispatch(sessionActions.requestAuthenticateUser({ username, password }));
  },
});

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedLogin);

// import PropTypes from "prop-types";
import React from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { connect, ConnectedProps } from "react-redux";
import { AuthenticationStatuses } from "../store/statuses";
import { sessionActions } from "../store/slices/session-slice";

// UnconnectedLogin.propTypes = {
//   authenticateUser: PropTypes.func,
//   authenticationStatus: PropTypes.oneOf(Object.values(AuthenticationStatuses)),
// };

const mapStateToProps = ({ session }) => ({
  authenticationStatus: session.authenticationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  authenticateUser: (username, password) =>
    dispatch(sessionActions.requestAuthenticateUser({ username, password })),
});

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
type LoginProps = ConnectedProps<typeof reduxConnector>;

type LoginState = {
  username: string;
  password: string;
};

class UnconnectedLogin extends React.Component<LoginProps, LoginState> {
  state = {
    username: "",
    password: "",
  };

  render() {
    const { authenticationStatus, authenticateUser } = this.props;
    return (
      <Container>
        <Form>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              isInvalid={
                authenticationStatus ==
                AuthenticationStatuses.USERNAME_NOT_FOUND
              }
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <Form.Text className="text-muted">
              New user? Create an account <a href="/new-user">here</a>.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please enter a valid username.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              isInvalid={
                authenticationStatus == AuthenticationStatuses.INVALID_PASSWORD
              }
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              Incorrect password.
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            variant="primary"
            type="button"
            disabled={
              authenticationStatus == AuthenticationStatuses.AUTHENTICATING ||
              authenticationStatus == AuthenticationStatuses.AUTHENTICATED
            }
            onClick={() =>
              authenticateUser(this.state.username, this.state.password)
            }
          >
            Submit
          </Button>
          {authenticationStatus == AuthenticationStatuses.AUTHENTICATED && (
            <Alert variant="success">Successfully logged in!</Alert>
          )}
        </Form>
      </Container>
    );
  }
}

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedLogin);

import PropTypes from "prop-types";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { AuthenticationStatuses } from "../store/statuses";
import { sessionActions } from "../store/slices/session-slice";

class UnconnectedLogin extends React.Component {
  render() {
    return (
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

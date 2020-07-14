import PropTypes from "prop-types";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { UserCreationStatuses } from "../store/statuses";
import { sessionActions } from "../store/slices/session-slice";

class UnconnectedNewUser extends React.Component {
  render() {
    let { tryCreateUser } = this.props;

    return (
      <Container>
        <Form onSubmit={tryCreateUser}>
          <Form.Group controlId="formNewUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="formNewUserPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group controlId="formNewUserRepeatPassword">
            <Form.Label>Repeat Password</Form.Label>
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

UnconnectedNewUser.propTypes = {
  tryCreateUser: PropTypes.func,
  userCreationStatus: PropTypes.oneOf(Object.values(UserCreationStatuses)),
};

const mapStateToProps = ({ session }) => ({
  userCreationStatus: session.userCreationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  tryCreateUser(e) {
    e.preventDefault();
    let username = e.target["username"].value;
    let password = e.target["password"].value;
    let repeatPassword = e.target["repeat-password"].value;
    if (
      username.length == 0 ||
      password.length == 0 ||
      repeatPassword.length == 0
    ) {
      return dispatch(
        sessionActions.createUserFailure({
          reason: UserCreationStatuses.EMPTY_FIELDS,
        })
      );
    }
    if (password == repeatPassword) {
      dispatch(sessionActions.requestCreateUser({ username, password }));
    } else {
      dispatch(
        sessionActions.createUserFailure({
          reason: UserCreationStatuses.PASSWORDS_DONT_MATCH,
        })
      );
    }
  },
});

export const NewUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedNewUser);

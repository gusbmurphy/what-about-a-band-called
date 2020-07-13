import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { beginCreateUser, createUserFailure } from "../store/actions/creators";
import { UserCreationStatuses } from "../store/actions/types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class UnconnectedNewUser extends React.Component {
  render() {
    let { tryCreateUser, userCreationStatus } = this.props;

    return (
      <Container>
        <Form onSubmit={tryCreateUser}>
          <Form.Group controlId="formNewUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>
          <Form.Group controlId="formNewUserPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"/>
          </Form.Group>
          <Form.Group controlId="formNewUserRepeatPassword">
            <Form.Label>Repeat Password</Form.Label>
            <Form.Control type="password"/>
          </Form.Group>
            {/* <input type="text" placeholder="Username" name="username" />
            <input type="password" placeholder="Password" name="password" />
            <input
              type="password"
              placeholder="Repeat password"
              name="repeat-password"
            />
            <button type="submit">Submit</button> */}
          {/* </Form.Group> */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
          {/* <div className="processAlert">{userCreationStatus}</div> */}
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

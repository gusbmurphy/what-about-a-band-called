import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { AuthenticationStatuses } from "../store/statuses";
import { LinkContainer } from "react-router-bootstrap";
import { sessionActions } from "../store/slices/session-slice";

// TODO: Should we have some way for users to log out?
const UnconnectedNavigation = ({ username, authenticationStatus, logout }) => (
  <Navbar>
    <LinkContainer to="/">
      <Navbar.Brand>wababc?</Navbar.Brand>
    </LinkContainer>
    <LinkContainer to="/bands">
      <Nav.Link>Bands</Nav.Link>
    </LinkContainer>
    {authenticationStatus == AuthenticationStatuses.AUTHENTICATED ? (
      <>
      <Nav.Item>
        Signed in as {username}
      </Nav.Item>
      <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
      </>
    ) : (
      <LinkContainer to="/login">
        <Nav.Link>Login</Nav.Link>
      </LinkContainer>
    )}
  </Navbar>
);

UnconnectedNavigation.propTypes = {
  username: PropTypes.string,
  authenticationStatus: PropTypes.oneOf(Object.values(AuthenticationStatuses)),
  logout: PropTypes.func.required,
};

const mapStateToProps = ({ session }) => ({
  authenticationStatus: session.authenticationStatus,
  username: session.username,
});

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(sessionActions.requestLogout());
    },
  };
}

export const Navigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedNavigation);

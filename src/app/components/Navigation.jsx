import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { AuthenticationStatuses } from "../store/statuses";

const UnconnectedNavigation = ({ username, authenticationStatus }) => (
  <Navbar>
    <Navbar.Brand href="/">wababc?</Navbar.Brand>
    <Nav.Link href="/bands">Bands</Nav.Link>
    {authenticationStatus == AuthenticationStatuses.AUTHENTICATED ? (
      <Nav.Item>Signed in as {username}</Nav.Item>
    ) : (
      <Nav.Link href="/login">Login</Nav.Link>
    )}
  </Navbar>
);

UnconnectedNavigation.propTypes = {
  username: PropTypes.string,
  authenticationStatus: PropTypes.oneOf(Object.values(AuthenticationStatuses)),
};

const mapStateToProps = ({ session }) => ({
  authenticationStatus: session.authenticationStatus,
  username: session.username,
});

export const Navigation = connect(mapStateToProps)(UnconnectedNavigation);

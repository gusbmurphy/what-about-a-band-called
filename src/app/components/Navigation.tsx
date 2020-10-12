import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { connect, ConnectedProps, useSelector, useDispatch } from "react-redux";
import { AuthenticationStatuses } from "../store/statuses";
import { LinkContainer } from "react-router-bootstrap";
import { sessionActions } from "../store/slices/session-slice";
import { RootState } from "../store";

export function Navigation(): JSX.Element {
  const { authenticationStatus, username } = useSelector(
    (state: RootState) => state.session
  );

  const dispatch = useDispatch();

  function logout() {
    dispatch(sessionActions.requestLogout());
  }

  function checkSession() {
    dispatch(sessionActions.requestCheckSession());
  }

  useEffect(() => {
    if (authenticationStatus == AuthenticationStatuses.NOT_TRYING)
      checkSession();
  }, []);

  return (
    <Navbar bg="light" className={"mb-3"}>
      <LinkContainer to="/">
        <Navbar.Brand>wababc?</Navbar.Brand>
      </LinkContainer>
      {authenticationStatus == AuthenticationStatuses.AUTHENTICATED ? (
        <>
          <Nav.Item>Signed in as {username}</Nav.Item>
          <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
        </>
      ) : (
        <>
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/new-user">
            <Nav.Link>Create Account</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </>
      )}
    </Navbar>
  );
}
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { connect, ConnectedProps } from "react-redux";
// import PropTypes from "prop-types";
import { AuthenticationStatuses } from "../store/statuses";
import { LinkContainer } from "react-router-bootstrap";
import { sessionActions } from "../store/slices/session-slice";

// UnconnectedNavigation.propTypes = {
//   username: PropTypes.string,
//   authenticationStatus: PropTypes.oneOf(Object.values(AuthenticationStatuses)),
//   logout: PropTypes.func.isRequired,
// };

const mapStateToProps = ({ session }) => ({
  authenticationStatus: session.authenticationStatus,
  username: session.username,
});

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(sessionActions.requestLogout());
    },
    checkSession: () => {
      dispatch(sessionActions.requestCheckSession());
    },
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type NavigationProps = ConnectedProps<typeof connector>;

class UnconnectedNavigation extends React.Component<NavigationProps> {
  componentDidMount() {
    if (this.props.authenticationStatus == AuthenticationStatuses.NOT_TRYING)
      this.props.checkSession();
  }

  render() {
    return (
      <Navbar bg="light" className={"mb-3"}>
        <LinkContainer to="/">
          <Navbar.Brand>wababc?</Navbar.Brand>
        </LinkContainer>
        {/* <Nav.Item className="mr-sm-2"> */}
        {this.props.authenticationStatus ==
        AuthenticationStatuses.AUTHENTICATED ? (
          <>
            <Nav.Item>Signed in as {this.props.username}</Nav.Item>
            <Nav.Link onClick={() => this.props.logout()}>Logout</Nav.Link>
          </>
        ) : (
          <>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/new-user">
              <Nav.Link>Create Account</Nav.Link>
            </LinkContainer>
          </>
        )}
        {/* </Nav.Item> */}
      </Navbar>
    );
  }
}

export const Navigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedNavigation);

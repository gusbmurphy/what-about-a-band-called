// import PropTypes from "prop-types";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { bandActions } from "../store/slices/bands-slice";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { AuthenticationStatuses } from "../store/statuses";

const NoNameAlert = () => (
  <Alert variant="danger">
    <Alert.Heading>This MF said &ldquo; &rdquo;</Alert.Heading>
    <p>Who are you? John Cage XD? Just kidding, don&apos;t know who that is.</p>
  </Alert>
);

function BandExistsAlert() {
  return (
    <Alert variant="danger">
      <Alert.Heading>Somebody already thought of that!</Alert.Heading>
      <p>
        Going to have to try harder. Maybe read a very complicated book and then
        think of some reference to that.
      </p>
    </Alert>
  );
}

function UserNotLoggedInAlert() {
  return (
    <Alert variant="warning">
      <Alert.Heading>You&apos;ve gotta be signed in!</Alert.Heading>
      <p>
        We don&apos;t let just anyone in here. You can{" "}
        <Alert.Link>make an account here</Alert.Link>, though, if you want.
      </p>
    </Alert>
  );
}

function BandCreatedAlert() {
  return (
    <Alert variant="success">
      <Alert.Heading>Name submitted!</Alert.Heading>
      <p>Now that&apos;s funny.</p>
    </Alert>
  );
}

// UnconnectedCreateBandForm.propTypes = {
//   createBand: PropTypes.func.isRequired,
//   authenticationStatus: PropTypes.oneOf(Object.values(AuthenticationStatuses))
//     .isRequired,
//   userId: PropTypes.string,
//   username: PropTypes.string,
// };

function mapStateToProps(state) {
  return {
    authenticationStatus: state.session.authenticationStatus,
    userId: state.session.userId,
    username: state.session.username,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createBand: (userId, username, bandName) => {
      dispatch(
        bandActions.requestCreateBand({
          creatingUserId: userId,
          creatingUsername: username,
          bandName,
        })
      );
    },
  };
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
type CreateBandFormProps = ConnectedProps<typeof reduxConnector>;

type CreateBandFormState = {
  bandName: string;
  displayBandExistsAlert: boolean;
  displayUserNotLoggedIn: boolean;
  displayNoNameAlert: boolean;
  displayProgess: boolean;
  displaySuccess: boolean;
};

class UnconnectedCreateBandForm extends React.Component<
  CreateBandFormProps,
  CreateBandFormState
> {
  state = {
    bandName: "",
    displayBandExistsAlert: false,
    displayUserNotLoggedIn: false,
    displayNoNameAlert: false,
    displayProgess: false,
    displaySuccess: false,
  };

  handleClick() {
    if (
      this.props.authenticationStatus == AuthenticationStatuses.AUTHENTICATED
    ) {
      if (this.state.bandName == "") {
        this.setState({
          displayBandExistsAlert: false,
          displayUserNotLoggedIn: false,
          displayNoNameAlert: true,
        });
      } else {
        this.props.createBand(
          this.props.userId,
          this.props.username,
          this.state.bandName
        );
        this.setState({
          displayBandExistsAlert: false,
          displayUserNotLoggedIn: false,
          displayNoNameAlert: false,
          displayProgess: false,
          displaySuccess: true,
        });
      }
    } else {
      this.setState({
        displayBandExistsAlert: false,
        displayUserNotLoggedIn: true,
        displayNoNameAlert: false,
      });
    }
  }

  render() {
    const {
      displayBandExistsAlert,
      displayNoNameAlert,
      displayProgess,
      displayUserNotLoggedIn,
      displaySuccess
    } = this.state;
    return (
      <>
        <InputGroup>
          <FormControl
            type="text"
            onChange={(e) => this.setState({ bandName: e.target.value })}
          />
          <InputGroup.Append>
            <Button variant="primary" onClick={() => this.handleClick()}>
              Submit
            </Button>
          </InputGroup.Append>
        </InputGroup>
        {displayUserNotLoggedIn ? <UserNotLoggedInAlert /> : null}
        {displayNoNameAlert ? <NoNameAlert /> : null}
        {displayBandExistsAlert ? <BandExistsAlert /> : null}
        {displaySuccess ? <BandCreatedAlert /> : null}
      </>
    );
  }
}

export const CreateBandForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedCreateBandForm);

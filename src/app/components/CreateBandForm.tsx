// import PropTypes from "prop-types";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { bandActions } from "../store/slices/bands-slice";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { AuthenticationStatuses } from "../store/statuses";
import { LinkContainer } from "react-router-bootstrap";
import { RootState } from "../store";
import { BandCreationStatuses } from "../store/statuses";
import Spinner from "react-bootstrap/Spinner";

const ErrorAlert = () => (
  <Alert variant="warning">
    <Alert.Heading>Uh oh...</Alert.Heading>
    <p>
      Something went wrong! What did you do!? Do you have any idea how much I
      worked to get this place clean and then you show up and mess the whole
      thing up? No respect...
    </p>
  </Alert>
);

const NoNameAlert = () => (
  <Alert variant="warning">
    <Alert.Heading>This MF said &ldquo;     &rdquo;</Alert.Heading>
    <p>Who are you, John Cage? 😭😭😭 Just kidding, don&apos;t know who that is.</p>
  </Alert>
);

function BandExistsAlert() {
  return (
    <Alert variant="warning">
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
        <LinkContainer to="/new-user">
          <Alert.Link>make an account here</Alert.Link>
        </LinkContainer>
        , though, if you want.
      </p>
    </Alert>
  );
}

const BandCreatedAlert = ({ name }) => {
  return (
    <Alert variant="success">
      <Alert.Heading>&ldquo;{name}&rdquo; submitted!</Alert.Heading>
      <p>Now that&apos;s funny.</p>
    </Alert>
  );
};

function mapStateToProps(state: RootState) {
  return {
    authenticationStatus: state.session.authenticationStatus,
    userId: state.session.userId,
    username: state.session.username,
    bandCreationStatus: state.bands.creationStatus,
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
  displayErrorAlert: boolean;
  lastSuccesfulName: string;
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
    displayErrorAlert: false,
    lastSuccesfulName: "",
  };

  componentDidUpdate(prevProps: CreateBandFormProps) {
    if (this.props.bandCreationStatus !== prevProps.bandCreationStatus) {
      switch (this.props.bandCreationStatus) {
        case BandCreationStatuses.CREATING:
          this.setState({
            displayBandExistsAlert: false,
            displayUserNotLoggedIn: false,
            displayNoNameAlert: false,
            displayProgess: true,
            displaySuccess: false,
            displayErrorAlert: false,
          });
          break;
        case BandCreationStatuses.CREATED:
          this.setState({
            displayBandExistsAlert: false,
            displayUserNotLoggedIn: false,
            displayNoNameAlert: false,
            displayProgess: false,
            displaySuccess: true,
            displayErrorAlert: false,
            lastSuccesfulName: this.state.bandName,
            bandName: "",
          });
          break;
        case BandCreationStatuses.BAND_EXISTS:
          this.setState({
            displayBandExistsAlert: true,
            displayUserNotLoggedIn: false,
            displayNoNameAlert: false,
            displayProgess: false,
            displaySuccess: false,
            displayErrorAlert: false,
            bandName: "",
          });
          break;
        case BandCreationStatuses.ERROR:
          this.setState({
            displayBandExistsAlert: false,
            displayUserNotLoggedIn: false,
            displayNoNameAlert: false,
            displayProgess: false,
            displaySuccess: false,
            displayErrorAlert: true,
          });
          break;
        default:
          return;
      }
    }
  }

  handleClick() {
    if (
      this.props.authenticationStatus == AuthenticationStatuses.AUTHENTICATED
    ) {
      if (this.state.bandName == "") {
        this.setState({
          displayBandExistsAlert: false,
          displayUserNotLoggedIn: false,
          displayNoNameAlert: true,
          displayProgess: false,
          displaySuccess: false,
        });
      } else {
        this.props.createBand(
          this.props.userId,
          this.props.username,
          this.state.bandName
        );
      }
    } else {
      this.setState({
        displayBandExistsAlert: false,
        displayUserNotLoggedIn: true,
        displayNoNameAlert: false,
        displayProgess: false,
        displaySuccess: false,
      });
    }
  }

  render() {
    const {
      displayBandExistsAlert,
      displayNoNameAlert,
      displayProgess,
      displayUserNotLoggedIn,
      displaySuccess,
    } = this.state;
    return (
      <div className={"mb-3"}>
        <InputGroup size="lg">
          <FormControl
            type="text"
            placeholder="What about a band called..."
            onChange={(e) => this.setState({ bandName: e.target.value })}
            value={this.state.bandName}
          />
          <InputGroup.Append>
            {displayProgess ? (
              <Button variant="primary" disabled>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              </Button>
            ) : (
              <Button variant="primary" onClick={() => this.handleClick()}>
                Submit
              </Button>
            )}
          </InputGroup.Append>
        </InputGroup>
        {displayUserNotLoggedIn ? <UserNotLoggedInAlert /> : null}
        {displayNoNameAlert ? <NoNameAlert /> : null}
        {displayBandExistsAlert ? <BandExistsAlert /> : null}
        {displaySuccess ? (
          <BandCreatedAlert name={this.state.lastSuccesfulName} />
        ) : null}
      </div>
    );
  }
}

export const CreateBandForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedCreateBandForm);

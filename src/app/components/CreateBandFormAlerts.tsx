import React from "react";
import Alert from "react-bootstrap/Alert";
import { LinkContainer } from "react-router-bootstrap";

export function ErrorAlert(): JSX.Element {
  return (
    <Alert variant="warning">
      <Alert.Heading>Uh oh...</Alert.Heading>
      <p>
        Something went wrong! What did you do!? Do you have any idea how much I
        worked to get this place clean and then you show up and mess the whole
        thing up? No respect...
      </p>
    </Alert>
  );
}

export function NoNameAlert(): JSX.Element {
  return (
    <Alert variant="warning">
      <Alert.Heading>This MF said &ldquo; &rdquo;</Alert.Heading>
      <p>
        Who are you, John Cage? 😭😭😭 Just kidding, don&apos;t know who that
        is.
      </p>
    </Alert>
  );
}

export function BandExistsAlert(): JSX.Element {
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

export function UserNotLoggedInAlert(): JSX.Element {
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

export function BandCreatedAlert(name: string): JSX.Element {
  return (
    <Alert variant="success">
      <Alert.Heading>&ldquo;{name}&rdquo; submitted!</Alert.Heading>
      <p>Now that&apos;s funny.</p>
    </Alert>
  );
}

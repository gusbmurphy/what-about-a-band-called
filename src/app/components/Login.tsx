import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { sessionActions } from "../store/slices/session-slice";
import { AuthenticationStatuses } from "../store/statuses";

export function LoginForm(): JSX.Element {
  const authenticationStatus = useSelector(
    (state: RootState) => state.session.authenticationStatus
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(sessionActions.requestAuthenticateUser({ username, password }));
  }

  return (
    <Container>
      <Card style={{ maxWidth: "36rem" }} className="mx-auto">
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                isInvalid={
                  authenticationStatus ==
                  AuthenticationStatuses.USERNAME_NOT_FOUND
                }
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Text className="text-muted">
                New user? Create an account <a href="/new-user">here</a>.
              </Form.Text>
              <Form.Control.Feedback type="invalid">
                Please enter a valid username.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                isInvalid={
                  authenticationStatus ==
                  AuthenticationStatuses.INVALID_PASSWORD
                }
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Incorrect password.
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              variant="primary"
              type="button"
              disabled={
                authenticationStatus == AuthenticationStatuses.AUTHENTICATING ||
                authenticationStatus == AuthenticationStatuses.AUTHENTICATED
              }
              onClick={() => handleSubmit()}
            >
              Submit
            </Button>
            {authenticationStatus == AuthenticationStatuses.AUTHENTICATING && (
              <Alert variant="info">
                <Spinner animation="border" variant="primary" /> Processing...
              </Alert>
            )}
            {authenticationStatus == AuthenticationStatuses.AUTHENTICATED && (
              <Alert variant="success">Successfully logged in!</Alert>
            )}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
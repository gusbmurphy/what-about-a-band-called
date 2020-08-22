// import PropTypes from "prop-types";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import { connect, ConnectedProps, useSelector, useDispatch } from "react-redux";
import { UserCreationStatuses } from "../store/statuses";
import { sessionActions } from "../store/slices/session-slice";
import Spinner from "react-bootstrap/Spinner";
import { RootState } from "../store";

// UnconnectedNewUserForm.propTypes = {
//   submitForm: PropTypes.func.isRequired,
//   userCreationStatus: PropTypes.oneOf(Object.values(UserCreationStatuses)),
// };

// const mapStateToProps = ({ session }) => ({
//   userCreationStatus: session.userCreationStatus,
// });

// const mapDispatchToProps = (dispatch) => ({
//   submitForm: (/*email,*/ username, password, repeatPassword) =>
//     dispatch(
//       sessionActions.requestCreateUser({
//         // email,
//         username,
//         password,
//         repeatPassword,
//       })
//     ),
// });

// const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
// type NewUserFormProps = ConnectedProps<typeof reduxConnector>;

// type NewUserFormState = {
//   email: string;
//   username: string;
//   password: string;
//   repeatPassword: string;
// };

export function NewUserForm(): JSX.Element {
  const userCreationStatus = useSelector(
    (state: RootState) => state.session.userCreationStatus
  );

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const dispatch = useDispatch();

  function submitForm() {
    dispatch(
      sessionActions.requestCreateUser({
        username,
        password,
        repeatPassword,
      })
    );
  }

  return (
    <Container className={"mb-5"}>
      <Card style={{ maxWidth: "36rem" }} className="mx-auto">
        <Card.Body>
          <Form>
            {/* <Form.Group controlId="formNewUserEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => this.setState({ email: e.target.value })}
                isInvalid={
                  this.props.userCreationStatus ==
                  UserCreationStatuses.INVALID_EMAIL
                }
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group> */}
            <Form.Group controlId="formNewUserName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                isInvalid={
                  userCreationStatus == UserCreationStatuses.USERNAME_TAKEN
                }
              />
              <Form.Control.Feedback type="invalid">
                Username is already taken.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formNewUserPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={
                  userCreationStatus ==
                  UserCreationStatuses.PASSWORDS_DONT_MATCH
                }
              />
            </Form.Group>
            <Form.Group controlId="formNewUserRepeatPassword">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setRepeatPassword(e.target.value)}
                isInvalid={
                  userCreationStatus ==
                  UserCreationStatuses.PASSWORDS_DONT_MATCH
                }
              />
              <Form.Control.Feedback type="invalid">
                Passwords don&apos;t match.
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              variant="primary"
              type="button"
              disabled={
                userCreationStatus == UserCreationStatuses.PROCESSING ||
                userCreationStatus == UserCreationStatuses.SUCCESS
              }
              onClick={() => submitForm()}
            >
              Submit
            </Button>
            {userCreationStatus == UserCreationStatuses.SUCCESS && (
              <Alert variant="success">
                Account created! You may now <a href="/login">log in</a>.
              </Alert>
            )}
            {userCreationStatus == UserCreationStatuses.PROCESSING && (
              <Alert variant="info">
                <Spinner animation="border" variant="primary" /> Processing...
              </Alert>
            )}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

// export class UnconnectedNewUserForm extends React.Component<
//   NewUserFormProps,
//   NewUserFormState
// > {
//   state = {
//     email: "",
//     username: "",
//     password: "",
//     repeatPassword: "",
//   };

//   // TODO: Wouldn't it be easy to make it so the email is validated as the user types? Maybe on a slight delay? Same with the username and password?

//   render() {
//     const { userCreationStatus } = this.props;
//     return (
//       <Container className={"mb-5"}>
//         <Card style={{ maxWidth: "36rem" }} className="mx-auto">
//           <Card.Body>
//             <Form>
//               {/* <Form.Group controlId="formNewUserEmail">
//                 <Form.Label>Email Address</Form.Label>
//                 <Form.Control
//                   type="text"
//                   onChange={(e) => this.setState({ email: e.target.value })}
//                   isInvalid={
//                     this.props.userCreationStatus ==
//                     UserCreationStatuses.INVALID_EMAIL
//                   }
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   Please enter a valid email address.
//                 </Form.Control.Feedback>
//               </Form.Group> */}
//               <Form.Group controlId="formNewUserName">
//                 <Form.Label>Username</Form.Label>
//                 <Form.Control
//                   type="text"
//                   onChange={(e) => this.setState({ username: e.target.value })}
//                   isInvalid={
//                     this.props.userCreationStatus ==
//                     UserCreationStatuses.USERNAME_TAKEN
//                   }
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   Username is already taken.
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group controlId="formNewUserPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   onChange={(e) => this.setState({ password: e.target.value })}
//                   isInvalid={
//                     this.props.userCreationStatus ==
//                     UserCreationStatuses.PASSWORDS_DONT_MATCH
//                   }
//                 />
//               </Form.Group>
//               <Form.Group controlId="formNewUserRepeatPassword">
//                 <Form.Label>Repeat Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   onChange={(e) =>
//                     this.setState({ repeatPassword: e.target.value })
//                   }
//                   isInvalid={
//                     this.props.userCreationStatus ==
//                     UserCreationStatuses.PASSWORDS_DONT_MATCH
//                   }
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   Passwords don&apos;t match.
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Button
//                 variant="primary"
//                 type="button"
//                 disabled={
//                   this.props.userCreationStatus ==
//                     UserCreationStatuses.PROCESSING ||
//                   this.props.userCreationStatus == UserCreationStatuses.SUCCESS
//                 }
//                 onClick={() =>
//                   this.props.submitForm(
//                     // this.state.email,
//                     this.state.username,
//                     this.state.password,
//                     this.state.repeatPassword
//                   )
//                 }
//               >
//                 Submit
//               </Button>
//               {this.props.userCreationStatus ==
//                 UserCreationStatuses.SUCCESS && (
//                 <Alert variant="success">
//                   Account created! You may now <a href="/login">log in</a>.
//                 </Alert>
//               )}
//               {userCreationStatus == UserCreationStatuses.PROCESSING && (
//                 <Alert variant="info">
//                   <Spinner animation="border" variant="primary" /> Processing...
//                 </Alert>
//               )}
//             </Form>
//           </Card.Body>
//         </Card>
//       </Container>
//     );
//   }
// }

// export const NewUserForm = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UnconnectedNewUserForm);

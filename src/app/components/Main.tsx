import React from "react";
import { Provider } from "react-redux";
import { Redirect } from "react-router";
import { Route, Router } from "react-router-dom";
import { store } from "../store";
import { AuthenticationStatuses } from "../store/statuses";
import { history } from "../store/history";
import { ControlledBandTable } from "./ControlledBandTable";
import { Landing } from "./Landing";
import { LoginForm } from "./Login";
import { Navigation } from "./Navigation";
import { NewUserForm } from "./NewUserForm";
import { UserProfile } from "./UserProfile";

// const AuthenticationGuard = (Component) => ({ match }) => {
//   if (
//     store.getState().session.authenticationStatus !==
//     AuthenticationStatuses.AUTHENTICATED
//   ) {
//     return <Redirect to="/" />;
//   }
//   return <Component match={match} />;
// };

export const Main = () => (
  // TODO: What is the Router's "history" all about?
  <Router history={history}>
    <Provider store={store}>
      <div>
        <Navigation />
        <Route exact path="/bands" component={ControlledBandTable} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/new-user" component={NewUserForm} />
        <Route exact path="/" component={Landing} />
        <Route
          path="/users/:userId"
          component={({ match }) => <UserProfile userId={match.params.userId} />}
        />
      </div>
    </Provider>
  </Router>
);

import React from "react";
import { Provider } from "react-redux";
import { Redirect } from "react-router";
import { Route, Router } from "react-router-dom";
import { store } from "../store";
import { AuthenticationStatuses } from "../store/statuses";
import { history } from "../store/history";
import { BigBandTable } from "./BigBandTable";
import { Landing } from "./Landing";
import { Login } from "./Login";
import { Navigation } from "./Navigation";
import { NewUserForm } from "./NewUser";

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
        <Route exact path="/bands" component={BigBandTable} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/new-user" component={NewUserForm} />
        <Route exact path="/" component={Landing} />
      </div>
    </Provider>
  </Router>
);

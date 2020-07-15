import React from "react";
import { Provider } from "react-redux";
import { Redirect } from "react-router";
import { Route, Router } from "react-router-dom";
import { store } from "../store";
import { AuthenticationStatuses } from "../store/statuses";
import { history } from "../store/history";
import { BigBandTable } from "./BigBandTable";
import { CreateBand } from "./CreateBand";
import { Landing } from "./Landing";
import { Login } from "./Login";
import { Navigation } from "./Navigation";
import { NewUserForm } from "./NewUser";

const AuthenticationGuard = (Component) => ({ match }) => {
  if (
    store.getState().session.authenticationStatus !==
    AuthenticationStatuses.AUTHENTICATED
  ) {
    return <Redirect to="/" />;
  }
  return <Component match={match} />;
};

export const Main = () => (
  // TODO: What is the Router's "history" all about?
  <Provider store={store}>
    <Router history={history}>
      <Navigation />
      <Route exact path="/bands" component={BigBandTable} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/new-user" component={NewUserForm} />
      <Route exact path="/newband" render={AuthenticationGuard(CreateBand)} />
      <Route exact path="/" render={Landing} />
    </Router>
  </Provider>
);

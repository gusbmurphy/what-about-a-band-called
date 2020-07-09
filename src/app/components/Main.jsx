import React from "react";
import { Provider } from "react-redux";
import { Redirect } from "react-router";
import { Route, Router } from "react-router-dom";
import { store } from "../store";
import { AuthenticationStatuses } from "../store/actions/types";
import { history } from "../store/history";
import { CreateBand } from "./CreateBand";
import { Login } from "./Login";
import { Navigation } from "./Navigation";
import { NewUser } from "./NewUser";
import { TheLists } from "./TheThreeLists";

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
  <Router history={history}>
    <h1>What about a band called...</h1>
    <Provider store={store}>
      <Navigation />
      {/* <Route exact path="/bands" component={BandList} /> */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/new-user" component={NewUser} />
      <Route exact path="/newband" render={AuthenticationGuard(CreateBand)} />
      <Route exact path="" render={TheLists} />
    </Provider>
  </Router>
);

import React from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import { Redirect } from "react-router";

import { store } from "../store";
import { history } from "../store/history";

import { Navigation } from "./Navigation";
import { BandList } from "./BandList";
import { CreateBand } from "./CreateBand";
import { Login } from "./Login";
import { NewUser } from "./NewUser";

const RouteGuard = (Component) => ({ match }) => {
  console.info("Route guard", match);
  if (!store.getState().session.authenticated) {
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
      <Route exact path="/bands" component={BandList} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/new-user" component={NewUser} />
      <Route exact path="/newband" render={RouteGuard(CreateBand)} />
    </Provider>
  </Router>
);

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

const RouteGuard = (Component) => ({ match }) => {
  console.info("Route guard", match);
  if (!store.getState().session.authenticated) {
    return <Redirect to="/" />;
  }
  return <Component match={match} />;
};

export const Main = () => (
  <Router history={history}>
    <h1>What about a band called...</h1>
    <Provider store={store}>
      <Navigation />
      <Route exact path="/" component={Login} />
      <Route exact path="/newband" render={RouteGuard(CreateBand)} />
      <BandList />
    </Provider>
  </Router>
);

import React from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import { Redirect } from "react-router";

import { store } from "../store";
import { history } from "../store/history";
import { AuthenticationStatuses, BandSortTypes } from "../store/action-types";

import { Navigation } from "./Navigation";
import { BandList } from "./BandList";
import { CreateBand } from "./CreateBand";
import { Login } from "./Login";
import { NewUser } from "./NewUser";

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
      <h4>Most Recent Bands</h4>
      <BandList maxBands={10} sortBy={BandSortTypes.MOST_RECENT} />
      <h4>Bottom 10 Bands</h4>
      <BandList maxBands={10} sortBy={BandSortTypes.WORST} />
      <h4>Top 10 Bands</h4>
      <BandList maxBands={10} sortBy={BandSortTypes.BEST} />
    </Provider>
  </Router>
);

import React from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";

import { store } from "../store";
import { history } from "../store/history";

import { BandList } from "./BandList";
import { Navigation } from "./Navigation";

export const Main = () => (
  <Router history={history}>
    <h1>What about a band called...</h1>
    <Provider store={store}>
      <Navigation />
      <div>
        <Route exact path="/bands" render={() => <BandList />} />
      </div>
    </Provider>
  </Router>
);

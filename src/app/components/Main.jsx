import React from "react";
import { Provider } from "react-redux";

import { store } from "../store";

import { BandList } from "./BandList";

export const Main = () => (
  <div>
    <h1>What about a band called...</h1>
    <Provider store={store}>
      <div>
        <BandList />
      </div>
    </Provider>
  </div>
);

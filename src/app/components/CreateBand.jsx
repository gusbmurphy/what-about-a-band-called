import React from "react";
import { connect } from "react-redux";

import { requestBandCreation } from "../store/action-creators";

const UnconnectedCreateBand = ({ createBand, session }) => (
  <div>
    What about a band called
    <input type="text" id="bandName" name="bandName"></input>
    <button
      onClick={() => createBand(session.userID, document.getElementById("bandName").value)}
    >
      Create Band
    </button>
  </div>
);

function mapStateToProps(state) {
  return {
    bands: state.bands,
    session: state.session,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    createBand: (userID, name) => {
      dispatch(requestBandCreation(userID, name));
    },
  };
}

export const CreateBand = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedCreateBand);

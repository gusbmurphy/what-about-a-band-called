import React from "react";
import { connect } from "react-redux";

import { beginBandCreation } from "../store/action-creators";

const UnconnectedCreateBand = ({ createBand, session }) => (
  <div>
    What about a band called
    <input type="text" id="band-name" name="band-name"></input>
    <button
      className="createBandButton"
      onClick={() =>
        createBand(session.userId, document.getElementById("band-name").value)
      }
    >
      Create Band
    </button>
  </div>
);

function mapStateToProps(state) {
  return {
    // bands: state.bands,
    session: state.session,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    createBand: (userId, bandName) => {
      dispatch(beginBandCreation(userId, bandName));
    },
  };
}

export const CreateBand = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedCreateBand);

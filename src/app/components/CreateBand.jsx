import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { beginBandCreation } from "../store/actions/creators";

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

UnconnectedCreateBand.propTypes = {
  createBand: PropTypes.func.isRequired,
  session: PropTypes.shape({
    userId: PropTypes.string,
  }),
};

function mapStateToProps(state) {
  return {
    // bands: state.bands,
    session: state.session,
  };
}

function mapDispatchToProps(dispatch) {
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

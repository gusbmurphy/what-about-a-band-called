import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { bandActions } from "../store/slices/bands-slice";

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
    session: state.session,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createBand: (userId, bandName) => {
      dispatch(bandActions.requestBandCreation({ userId, bandName }));
    },
  };
}

export const CreateBand = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedCreateBand);

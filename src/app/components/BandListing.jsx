import React from "react";
import PropTypes from "prop-types";

export default class BandListing extends React.Component {
  render() {
    let {
      // bandId,
      bandName,
      bandScore,
      bandCreatorName,
      userIsAuthenticated,
      // addPointsTo
    } = this.props;

    let buttons = userIsAuthenticated ? activeButtons() : inactiveButtons();

    return (
      <div className="bandListing">
        {bandName} ({bandScore}) by {bandCreatorName}
        {buttons}
      </div>
    );
  }
}

function activeButtons() {
  return (
    <>
      <button className="incScoreButton">+</button>
      <button className="decScoreButton">-</button>
    </>
  );
}

function inactiveButtons() {
  return (
    <>
      <button className="incScoreButton" disabled>
        +
      </button>
      <button className="decScoreButton" disabled>
        -
      </button>
    </>
  );
}

BandListing.propTypes = {
  bandId: PropTypes.string.isRequired,
  bandName: PropTypes.string.isRequired,
  bandScore: PropTypes.number.isRequired,
  bandCreatorName: PropTypes.string.isRequired,
  userIsAuthenticated: PropTypes.bool.isRequired,
  // addPointsTo: PropTypes.func.isRequired,
};

import React from "react";
import PropTypes from "prop-types";

export default class BandListing extends React.Component {
  render() {
    let {
      // bandId,
      bandName,
      bandScore,
      bandCreatorName,
      // isAuthenticated,
      // addPointsTo
    } = this.props;

    return (
      <div className="bandListing">
        {bandName} ({bandScore}) by {bandCreatorName}
        {/* {isAuthenticated && (
          <div>
            <button className="incScoreButton" onClick={addPointsTo(bandId)}>
              +
            </button>
            <button className="decScoreButton" onClick={() => handleDecrement}>
              -
            </button>
          </div>
        )} */}
      </div>
    );
  }
}

BandListing.propTypes = {
  bandId: PropTypes.string.isRequired,
  bandName: PropTypes.string.isRequired,
  bandScore: PropTypes.number.isRequired,
  bandCreatorName: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  // addPointsTo: PropTypes.func.isRequired,
};

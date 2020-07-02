import React from "react";
import PropTypes from "prop-types";

import { typeOfObjectId } from "./util/prop-helpers"

export class BandListing extends React.Component {
  render() {
    let {
      bandName,
      bandScore,
      bandId,
      bandCreatorName,
      isAuthenticated,
      onIncClick,
      onDecClick,
    } = this.props;

    return (
      <div key={bandId} className="bandListing">
        {bandName} ({bandScore}) by {bandCreatorName}
        {isAuthenticated && (
          <div>
            <button className="incScoreButton" onClick={() => onIncClick}>
              +
            </button>
            <button className="decScoreButton" onClick={() => onDecClick}>
              -
            </button>
          </div>
        )}
      </div>
    );
  }
}

BandListing.propTypes = {
  bandName: PropTypes.string.isRequired,
  bandScore: PropTypes.number.isRequired,
  bandId: (props, propName, componentName) => typeOfObjectId(props, propName, componentName),
  bandCreatorName: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onIncClick: PropTypes.func.isRequired,
  onDecClick: PropTypes.func.isRequired,
};

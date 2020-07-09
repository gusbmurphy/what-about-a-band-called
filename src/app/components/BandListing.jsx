import React from "react";
import PropTypes from "prop-types";

export default class BandListing extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleModificationClick.bind(this);
  }

  handleModificationClick(modValue) {
    this.props.modifyBand(modValue);
  }

  render() {
    let {
      bandName,
      bandScore,
      bandCreatorName,
      userIsAuthenticated,
      modificationPerformed,
    } = this.props;

    let incButton = (
      <button
        className="incScoreButton"
        onClick={() => this.handleModificationClick(1)}
      >
        +
      </button>
    );
    let decButton = (
      <button
        className="decScoreButton"
        onClick={() => this.handleModificationClick(-1)}
      >
        -
      </button>
    );
    let disabledIncButton = (
      <button className="incScoreButton" disabled>
        +
      </button>
    );
    let disabledDecButton = (
      <button className="decScoreButton" disabled>
        -
      </button>
    );

    const getButtons = () => {
      if (!userIsAuthenticated) {
        return (
          <>
            {disabledIncButton}
            {disabledDecButton}
          </>
        );
      }

      switch (modificationPerformed) {
        case 1:
          return (
            <>
              {disabledIncButton}
              {decButton}
            </>
          );
        case -1:
          return (
            <>
              {incButton}
              {disabledDecButton}
            </>
          );
        default:
          break;
      }

      return (
        <>
          {incButton}
          {decButton}
        </>
      );
    };

    return (
      <div className="bandListing">
        {bandName} ({bandScore}) by {bandCreatorName}
        {getButtons()}
      </div>
    );
  }
}

BandListing.propTypes = {
  bandName: PropTypes.string.isRequired,
  bandScore: PropTypes.number.isRequired,
  bandCreatorName: PropTypes.string.isRequired,
  userIsAuthenticated: PropTypes.bool.isRequired,
  modificationPerformed: PropTypes.number,
  modifyBand: PropTypes.func.isRequired,
};

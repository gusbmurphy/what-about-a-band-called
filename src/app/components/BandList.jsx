import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { AuthenticationStatuses, BandSortTypes } from "../store/actions/types";
import {
  beginModifyBandScore,
  requestFetchBands,
} from "../store/actions/creators";
import BandListing from "./BandListing";

class UnconnectedBandList extends React.Component {
  componentDidMount() {
    this.props.requestFetchBands(this.props.maxBands, this.props.sortBy);
  }

  filterBands() {
    let filteredBands = [...this.props.bands];

    switch (this.props.sortBy) {
      case BandSortTypes.BEST:
        filteredBands.sort((a, b) => b.score - a.score);
        break;
      case BandSortTypes.MOST_RECENT:
        filteredBands.sort((a, b) => a.createdOn - b.createdOn);
        break;
      case BandSortTypes.WORST:
        filteredBands.sort((a, b) => a.score - b.score);
        break;
      default:
        break;
    }

    filteredBands = filteredBands.slice(0, this.props.maxBands);

    return filteredBands;
  }

  render() {
    if (this.props.appIsFetchingBands) {
      return <div className="loadingMessage">Loading bands...</div>;
    }

    let filteredBands = this.filterBands();

    const modifyBand = (targetBandId, userId) => {
      return (modificationValue) =>
        this.props.addPointsTo(targetBandId, userId, modificationValue);
    };

    const getModificationPerformedToBand = (targetBandId) => {
      if (!this.props.userIsAuthenticated) return null;
      let modification = this.props.usersModifications.find(
        (modification) => modification.targetBandId == targetBandId
      );
      if (modification) return modification.value;
      else return null;
    };

    return (
      <div className="bandList">
        {filteredBands.map((band) => (
          <BandListing
            key={band._id}
            bandName={band.name}
            bandScore={band.score}
            bandCreatorName={band.ownerName}
            userIsAuthenticated={this.props.userIsAuthenticated}
            modifyBand={modifyBand(band._id, this.props.userId)}
            modificationPerformed={getModificationPerformedToBand(band._id)}
          />
        ))}
      </div>
    );
  }
}

UnconnectedBandList.propTypes = {
  bands: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      ownerId: PropTypes.string,
      score: PropTypes.number,
    })
  ),
  userIsAuthenticated: PropTypes.bool.isRequired,
  userId: PropTypes.string,
  usersModifications: PropTypes.array,
  addPointsTo: PropTypes.func.isRequired,
  requestFetchBands: PropTypes.func.isRequired,
  appIsFetchingBands: PropTypes.bool.isRequired,
  maxBands: PropTypes.number.isRequired,
  sortBy: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    appIsFetchingBands: state.bands.pendingFetches > 0 ? true : false,
    bands: state.bands.items,
    userIsAuthenticated:
      state.session.authenticationStatus == AuthenticationStatuses.AUTHENTICATED
        ? true
        : false,
    userId: state.session.userId,
    usersModifications: state.session.bandsModified,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPointsTo: (targetBandId, userId, modificationValue) => {
      dispatch(beginModifyBandScore(targetBandId, userId, modificationValue));
    },
    requestFetchBands: (maxBands, sortBy) => {
      dispatch(requestFetchBands(maxBands, sortBy));
    },
  };
}

export const BandList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedBandList);

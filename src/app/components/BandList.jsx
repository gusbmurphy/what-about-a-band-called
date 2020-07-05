import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { AuthenticationStatuses, BandSortTypes } from "../store/action-types";
import {
  beginModifyBandScore,
  beginFetchBands,
} from "../store/action-creators";
import BandListing from "./BandListing";

class UnconnectedBandList extends React.Component {
  componentDidMount() {
    this.props.beginFetchBands(this.props.maxBands, this.props.sortBy);
  }

  render() {
    let { bands, authenticationStatus, userId, addPointsTo } = this.props;
    let isAuthenticated =
      authenticationStatus == AuthenticationStatuses.AUTHENTICATED;

    return (
      <div>
        <div className="bandList">
          {bands.map((band) => (
            <BandListing
              key={band._id}
              bandId={band._id}
              bandName={band.name}
              bandScore={band.score}
              bandCreatorName={band.ownerName}
              isAuthenticated={isAuthenticated}
              // addPointsTo={addPointsTo}
            />
          ))}
        </div>
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
  authenticationStatus: PropTypes.oneOf(Object.values(AuthenticationStatuses))
    .isRequired,
  userId: PropTypes.string,
  addPointsTo: PropTypes.func.isRequired,
  beginFetchBands: PropTypes.func.isRequired,
  maxBands: PropTypes.number.isRequired,
  sortBy: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  let desiredBands = [...state.bands.items];
  
  switch (ownProps.sortBy) {
    case BandSortTypes.BEST:
      desiredBands.sort((a, b) => b.score - a.score);
      console.log("Bands sorted by BEST: ", desiredBands);
      break;
    case BandSortTypes.MOST_RECENT:
      desiredBands.sort((a, b) => a.createdOn - b.createdOn);
      console.log("Bands sorted by MOST_RECENT: ", desiredBands);
      break;
    case BandSortTypes.WORST:
      desiredBands.sort((a, b) => a.score - b.score);
      console.log("Bands sorted by WORST: ", desiredBands);
      break;
    default:
      break;
  }

  desiredBands = desiredBands.slice(0, ownProps.maxBands - 1);

  return {
    bands: desiredBands,
    authenticationStatus: state.session.authenticationStatus,
    userId: state.session.userId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPointsTo: (targetBandId, userId, modificationValue) => {
      dispatch(beginModifyBandScore(targetBandId, userId, modificationValue));
    },
    beginFetchBands: (maxBands, sortBy) => {
      dispatch(beginFetchBands(maxBands, sortBy));
    },
  };
}

export const BandList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedBandList);

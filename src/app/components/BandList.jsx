import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { AuthenticationStatuses, BandSortTypes } from "../store/action-types";
import {
  beginModifyBandScore,
  requestFetchBands,
} from "../store/action-creators";
import BandListing from "./BandListing";

class UnconnectedBandList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.filterBands = filterBands.bind.this;
  // }

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
    console.log(this.props.sortBy + " list rendered.");
    // let { authenticationStatus } = this.props;
    // let isAuthenticated =
    //   authenticationStatus == AuthenticationStatuses.AUTHENTICATED;

    if (this.props.appIsFetchingBands) {
      return <div className="loadingMessage">Loading bands...</div>;
    }

    let filteredBands = this.filterBands();

    return (
      <div className="bandList">
        {filteredBands.map((band) => (
          <BandListing
            key={band._id}
            bandId={band._id}
            bandName={band.name}
            bandScore={band.score}
            bandCreatorName={band.ownerName}
            userIsAuthenticated={this.props.userIsAuthenticated}
            // addPointsTo={addPointsTo}
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
  addPointsTo: PropTypes.func.isRequired,
  requestFetchBands: PropTypes.func.isRequired,
  appIsFetchingBands: PropTypes.bool.isRequired,
  maxBands: PropTypes.number.isRequired,
  sortBy: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  // let desiredBands = [...state.bands.items];

  // switch (ownProps.sortBy) {
  //   case BandSortTypes.BEST:
  //     desiredBands.sort((a, b) => b.score - a.score);
  //     break;
  //   case BandSortTypes.MOST_RECENT:
  //     desiredBands.sort((a, b) => a.createdOn - b.createdOn);
  //     break;
  //   case BandSortTypes.WORST:
  //     desiredBands.sort((a, b) => a.score - b.score);
  //     break;
  //   default:
  //     break;
  // }

  // desiredBands = desiredBands.slice(0, ownProps.maxBands);

  return {
    appIsFetchingBands: state.bands.pendingFetches > 0 ? true : false,
    bands: state.bands.items,
    userIsAuthenticated:
      state.session.authenticationStatus == AuthenticationStatuses.AUTHENTICATED
        ? true
        : false,
    userId: state.session.userId,
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

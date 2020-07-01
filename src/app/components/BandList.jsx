import React from "react";
import { connect } from "react-redux";

import { AuthenticationStatuses } from "../store/action-types";
import {
  beginModifyBandScore,
  beginFetchBands,
} from "../store/action-creators";

class UnconnectedBandList extends React.Component {
  componentDidMount() {
    this.props.beginFetchBands();
  }

  render() {
    let { bands, authenticationStatus, userId, addPointsTo } = this.props;

    return (
      <div>
        <h3>All Bands</h3>
        <div className="bandList">
          {bands.items.map((band) => (
            <div key={band._id} className="bandListing">
              {band.name} ({band.score})
              {authenticationStatus ===
                AuthenticationStatuses.AUTHENTICATED && (
                <div>
                  <button
                    className="incScoreButton"
                    onClick={() => addPointsTo(band._id, userId, 1)}
                  >
                    +
                  </button>
                  <button
                    className="decScoreButton"
                    onClick={() => addPointsTo(band._id, userId, -1)}
                  >
                    -
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bands: state.bands,
    authenticationStatus: state.session.authenticationStatus,
    userId: state.session.userId,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addPointsTo: (targetBandId, userId, modificationValue) => {
      dispatch(beginModifyBandScore(targetBandId, userId, modificationValue));
    },
    beginFetchBands: () => {
      dispatch(beginFetchBands());
    },
  };
}

export const BandList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedBandList);

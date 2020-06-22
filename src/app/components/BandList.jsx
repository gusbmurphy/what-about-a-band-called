import React from "react";
import { connect } from "react-redux";

import { AuthenticationStatuses } from "../store/action-types"
import {
  beginModifyBandScore,
  beginFetchBands
} from "../store/action-creators";

class UnconnectedBandList extends React.Component {
  componentDidMount() {
    this.props.beginFetchBands();
  }

  render() {
    let { bands, authenticationStatus, addPointsTo } = this.props;

    return (
      <div>
        <h3>All Bands</h3>
        {bands.items.map((band) => (
          <div key={band._id}>
            {band.name} ({band.score})
            {authenticationStatus === AuthenticationStatuses.AUTHENTICATED && (
              <div>
                <button onClick={() => addPointsTo(band.id, userId, 1)}>+</button>
                <button onClick={() => addPointsTo(band.id, userId, -1)}>-</button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bands: state.bands,
    authenticationStatus: state.authenticationStatus,
    userId: state.userId
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

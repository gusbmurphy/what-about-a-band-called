import React from "react";
import PropTypes from "prop-types";
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

UnconnectedBandList.propTypes = {
  bands: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        ownerId: PropTypes.string,
        score: PropTypes.number,
      })
    ),
  }),
  authenticationStatus: PropTypes.oneOf(Object.values(AuthenticationStatuses))
    .isRequired,
  userId: PropTypes.string,
  addPointsTo: PropTypes.func.isRequired,
  beginFetchBands: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    bands: state.bands,
    authenticationStatus: state.session.authenticationStatus,
    userId: state.session.userId,
  };
}

function mapDispatchToProps(dispatch) {
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

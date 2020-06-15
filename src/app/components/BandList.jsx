import React from "react";
import { connect } from "react-redux";

import {
  requestModifyBandScore,
  AUTHENTICATED,
  beginFetchBands
} from "../store/mutations";

class UnconnectedBandList extends React.Component {
  componentDidMount() {
    this.props.beginFetchBands();
  }

  render() {
    let { bands, session, addPointsTo } = this.props;

    return (
      <div>
        <h3>All Bands</h3>
        {bands.map((band) => (
          <div key={band.id}>
            {band.name} ({band.score})
            {session.authenticated === AUTHENTICATED && (
              <div>
                <button onClick={() => addPointsTo(band.id, 1)}>+</button>
                <button onClick={() => addPointsTo(band.id, -1)}>-</button>
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
    session: state.session,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addPointsTo: (id, value) => {
      dispatch(requestModifyBandScore(id, "U1", value));
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

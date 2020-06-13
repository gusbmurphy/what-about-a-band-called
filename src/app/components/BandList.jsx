import React from "react";
import { connect } from "react-redux";

import { requestBandCreation, modifyBandScore } from "../store/mutations";

const UnconnectedBandList = ({ bands, addPointsTo, createBand }) => (
  <div>
    <h3>All Bands</h3>
    {bands.map((band) => (
      <div key={band.id}>
        {band.name} ({band.score})
        <button onClick={() => addPointsTo(band.id, 1)}>+</button>
        <button onClick={() => addPointsTo(band.id, -1)}>-</button>
      </div>
    ))}
  </div>
);

function mapStateToProps(state) {
  return {
    bands: state.bands,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        addPointsTo: (id, value) => {
            dispatch(modifyBandScore(id, "U1", value))
        }
    }
}

export const BandList = connect(mapStateToProps, mapDispatchToProps)(UnconnectedBandList);
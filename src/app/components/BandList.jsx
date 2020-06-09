import React from "react";
import { connect } from "react-redux";

const UnconnectedBandList = ({ bands }) => (
  <div>
    <h3>All Bands</h3>
    {bands.map((band) => (
      <div>
        {band.name} ({band.score})
      </div>
    ))}
  </div>
);

function mapStateToProps(state) {
  return {
    bands: state.bands,
  };
}

export const BandList = connect(mapStateToProps)(UnconnectedBandList);

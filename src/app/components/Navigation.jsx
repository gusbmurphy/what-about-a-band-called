import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

const UnconnectedNavigation = () => (
  <div>
    <Link to="/bands">
      Bands
    </Link>
    <Link to="/newband">
      New Band
    </Link>
  </div>
);

export const Navigation = connect(state => state)(UnconnectedNavigation);
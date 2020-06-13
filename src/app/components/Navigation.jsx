import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

const UnconnectedNavigation = () => (
  <div>
    <Link to="/bands">
      <h2>Bands</h2>
    </Link>
    <Link to="/newband">
      <h2>New Band</h2>
    </Link>
  </div>
);

export const Navigation = connect(state => state)(UnconnectedNavigation);
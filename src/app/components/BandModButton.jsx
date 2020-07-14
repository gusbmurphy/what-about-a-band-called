import PropTypes from "prop-types";
import React from "react";
import Button from "react-bootstrap/Button";

export class BandModButton extends React.Component {
  handleClick() {
    console.log(
      '"The button makes a clicking sound... somewhere a door has opened."'
    );
  }

  render() {
    let symbol = this.props.modValue == 1 ? "+" : "-";
    return (
      <Button
        variant="outline-primary"
        size="sm"
        disabled={!this.props.authorized}
      >
        {symbol}
      </Button>
    );
  }
}

BandModButton.propTypes = {
  modValue: PropTypes.oneOf([-1, 1]).isRequired,
  authorized: PropTypes.bool.isRequired,
  modifyBand: PropTypes.func,
};

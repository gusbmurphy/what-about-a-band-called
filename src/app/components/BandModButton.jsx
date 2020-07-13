import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

export class BandModButton extends React.Component {
  handleClick() {
    // this.props.modifyBand(this.props.modValue);
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

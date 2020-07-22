import PropTypes from "prop-types";
import React from "react";
import Button from "react-bootstrap/Button";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import {
  BsCaretDown,
  BsCaretDownFill,
  BsCaretUp,
  BsCaretUpFill,
} from "react-icons/bs";

// BandModButtonGroup.propTypes = {
//   userIsAuthorized: PropTypes.bool.isRequired,
//   modifyBand: PropTypes.func,
//   modPerformed: PropTypes.oneOf([1, 0, -1]),
// };

type BandModButtonGroupProps = {
  userIsAuthorized: boolean;
  modifyBand: (modValue: number, undoValue?: number) => void;
  modPerformed: number;
};

type BandModButtonGroupState = {
  modValue: number;
};

// TODO: Logging out will still show the BsCarrets as 'filled' if the user modified those bands
export class BandModButtonGroup extends React.Component<
  BandModButtonGroupProps,
  BandModButtonGroupState
> {
  state = {
    modValue: this.props.modPerformed,
  };

  componentDidUpdate(
    prevProps: BandModButtonGroupProps,
    prevState: BandModButtonGroupState
  ) {
    if (this.state.modValue != prevState.modValue) {
      if (this.state.modValue == 0) {
        this.props.modifyBand(0, prevState.modValue);
      } else {
        this.props.modifyBand(this.state.modValue);
      }
    }
  }

  render() {
    const { userIsAuthorized, modPerformed } = this.props;
    return (
      <ToggleButtonGroup
        name={"modButtons"}
        value={this.state.modValue}
        onChange={(val) =>
          // console.log(val)
          this.setState({ modValue: this.state.modValue + val })
        }
      >
        <ToggleButton
          name={"negativeButton"}
          value={-1}
          disabled={!userIsAuthorized}
          checked={modPerformed == -1}
        >
          {this.state.modValue == -1 ? <BsCaretDownFill /> : <BsCaretDown />}
        </ToggleButton>
        <ToggleButton
          name={"positiveButton"}
          value={1}
          disabled={!userIsAuthorized}
          checked={modPerformed == 1}
        >
          {this.state.modValue == 1 ? <BsCaretUpFill /> : <BsCaretUp />}
        </ToggleButton>
      </ToggleButtonGroup>
    );
  }
}

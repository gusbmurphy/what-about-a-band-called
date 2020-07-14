import PropTypes from "prop-types";
import React from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { BandModButton } from "./BandModButton";

export default class BandListing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      bandName,
      bandScore,
      bandCreatorName,
      userIsAuthenticated,
      modificationPerformed,
    } = this.props;

    const getButtons = () => {
      if (!userIsAuthenticated) {
        <>
          <BandModButton
            modValue={1}
            authorized={false}
            modifyBand={this.props.modifyBand}
          />
          <BandModButton
            modValue={-1}
            authorized={false}
            modifyBand={this.props.modifyBand}
          />
        </>;
      }
      switch (modificationPerformed) {
        case 1:
          return (
            <>
              <BandModButton
                modValue={1}
                authorized={false}
                modifyBand={this.props.modifyBand}
              />
              <BandModButton
                modValue={-1}
                authorized={true}
                modifyBand={this.props.modifyBand}
              />
            </>
          );
        case -1:
          return (
            <>
              <BandModButton
                modValue={1}
                authorized={true}
                modifyBand={this.props.modifyBand}
              />
              <BandModButton
                modValue={-1}
                authorized={false}
                modifyBand={this.props.modifyBand}
              />
            </>
          );
        default:
          return (
            <>
              <BandModButton
                modValue={1}
                authorized={true}
                modifyBand={this.props.modifyBand}
              />
              <BandModButton
                modValue={-1}
                authorized={true}
                modifyBand={this.props.modifyBand}
              />
            </>
          );
      }
    };

    return (
      <ListGroupItem className="bandListing">
        {bandName} ({bandScore}) by {bandCreatorName}
        {getButtons()}
      </ListGroupItem>
    );
  }
}

BandListing.propTypes = {
  bandName: PropTypes.string.isRequired,
  bandScore: PropTypes.number.isRequired,
  bandCreatorName: PropTypes.string.isRequired,
  userIsAuthenticated: PropTypes.bool.isRequired,
  modificationPerformed: PropTypes.number,
  modifyBand: PropTypes.func.isRequired,
};

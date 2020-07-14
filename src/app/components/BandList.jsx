import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
// import {
//   beginModifyBandScore,
//   requestFetchBands,
// } from "../store/actions/creators";
import { AuthenticationStatuses, BandSortTypes } from "../store/actions/types";
import { bandActions } from "../store/slices/bands-slice"
import BandTableEntry from "./BandTableEntry";
import ListGroup from "react-bootstrap/ListGroup";
import { sortAndLimitBands } from "./utility/limit-sort-bands";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import { getPresentationString } from "./utility/get-presentation-string";

class UnconnectedBandList extends React.Component {
  componentDidMount() {
    this.props.requestFetchBands(this.props.maxBands, this.props.sortBy);
  }

  render() {
    if (this.props.appIsFetchingBands) {
      return <div className="loadingMessage">Loading bands...</div>;
    }

    const modifyBand = (targetBandId, userId) => {
      return (modificationValue) =>
        this.props.addPointsTo(targetBandId, userId, modificationValue);
    };

    const getModificationPerformedToBand = (targetBandId) => {
      if (!this.props.userIsAuthenticated) return null;
      let modification = this.props.usersModifications.find(
        (modification) => modification.targetBandId == targetBandId
      );
      if (modification) return modification.value;
      else return null;
    };

    let desiredBands = sortAndLimitBands(
      this.props.bands,
      this.props.sortBy,
      this.props.maxBands
    );

    return (
      <Card>
        <Card.Body>
          <Card.Title>{getPresentationString(this.props.sortBy)}</Card.Title>
          <Table className="bandList" size="sm">
            <tbody>
              {desiredBands.map((band) => (
                <BandTableEntry
                  key={band._id}
                  bandName={band.name}
                  bandScore={band.score}
                  bandCreatorName={band.ownerName}
                  userIsAuthenticated={this.props.userIsAuthenticated}
                  modifyBand={modifyBand(band._id, this.props.userId)}
                  modificationPerformed={getModificationPerformedToBand(
                    band._id
                  )}
                />
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
  }
}

UnconnectedBandList.propTypes = {
  bands: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      ownerId: PropTypes.string,
      score: PropTypes.number,
    })
  ),
  userIsAuthenticated: PropTypes.bool.isRequired,
  userId: PropTypes.string,
  usersModifications: PropTypes.array,
  addPointsTo: PropTypes.func.isRequired,
  requestFetchBands: PropTypes.func.isRequired,
  appIsFetchingBands: PropTypes.bool.isRequired,
  maxBands: PropTypes.number.isRequired,
  sortBy: PropTypes.oneOf(Object.values(BandSortTypes)).isRequired,
};

function mapStateToProps(state) {
  return {
    appIsFetchingBands: state.bands.pendingFetches > 0 ? true : false,
    bands: state.bands.items,
    userIsAuthenticated:
      state.session.authenticationStatus == AuthenticationStatuses.AUTHENTICATED
        ? true
        : false,
    userId: state.session.userId,
    usersModifications: state.session.bandsModified,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPointsTo: (targetBandId, userId, modificationValue) => {
      dispatch(bandActions.requestModifyBandScore({targetBandId, userId, modificationValue}));
    },
    requestFetchBands: (maxBands, sortBy) => {
      dispatch(bandActions.requestFetchBands({maxBands, sortBy}));
    },
  };
}

export const BandList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedBandList);

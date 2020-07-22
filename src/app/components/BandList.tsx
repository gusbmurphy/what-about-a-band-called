// import PropTypes from "prop-types";
import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { connect, ConnectedProps } from "react-redux";
import { AuthenticationStatuses, BandSortTypes } from "../store/statuses";
import { bandActions } from "../store/slices/bands-slice";
import BandTableEntry from "./BandTableEntry";
import { getPresentationString } from "./utility/get-presentation-string";
import { sortAndLimitBands } from "./utility/limit-sort-bands";
import { RootState } from "../store";
import { Types as MongooseTypes } from "mongoose";

function mapStateToProps(state: RootState) {
  return {
    appIsFetchingBands: state.bands.pendingFetches > 0 ? true : false,
    bands: [...state.bands.items],
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
    addPointsTo: (
      targetBandId: MongooseTypes.ObjectId,
      userId: MongooseTypes.ObjectId,
      modificationValue: number
    ): void => {
      dispatch(
        bandActions.requestModifyBandScore({
          targetBandId,
          modifyingUserId: userId,
          modificationValue,
        })
      );
    },
    requestFetchBands: (maxBands: number, sortBy: BandSortTypes): void => {
      dispatch(bandActions.requestFetchBands({ maxBands, sortBy }));
    },
  };
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof reduxConnector>;

type BandListProps = PropsFromRedux & {
  maxBands: number;
  sortBy: BandSortTypes;
};

class UnconnectedBandList extends React.Component<BandListProps> {
  componentDidMount() {
    this.props.requestFetchBands(this.props.maxBands, this.props.sortBy);
  }

  render() {
    if (this.props.appIsFetchingBands) {
      return <div className="loadingMessage">Loading bands...</div>;
    }

    const modifyBand = (
      targetBandId: MongooseTypes.ObjectId,
      userId?: MongooseTypes.ObjectId
    ) => {
      // TODO: This doesn't look great...
      if (userId) {
        return (modValue: number) =>
          this.props.addPointsTo(targetBandId, userId, modValue);
      } else return (modValue: number) => null;
    };

    const getModificationPerformedToBand = (
      targetBandId: MongooseTypes.ObjectId
    ): number | null => {
      if (!this.props.userIsAuthenticated) return null;
      const modification = this.props.usersModifications.find(
        (modification) => modification.targetBandId == targetBandId
      );
      if (modification) return modification.value;
      else return null;
    };

    const desiredBands = sortAndLimitBands(
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
                  key={String(band._id)}
                  bandName={band.name}
                  bandScore={band.score}
                  bandCreatorName={band.ownerName}
                  userIsAuthenticated={this.props.userIsAuthenticated}
                  modifyBand={modifyBand(band._id, this.props.userId)}
                  modificationPerformed={
                    getModificationPerformedToBand(band._id) || 0
                  }
                />
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
  }
}

// UnconnectedBandList.propTypes = {
//   bands: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string,
//       name: PropTypes.string,
//       ownerId: PropTypes.string,
//       score: PropTypes.number,
//     })
//   ),
//   userIsAuthenticated: PropTypes.bool.isRequired,
//   userId: PropTypes.string,
//   usersModifications: PropTypes.array,
//   addPointsTo: PropTypes.func.isRequired,
//   requestFetchBands: PropTypes.func.isRequired,
//   appIsFetchingBands: PropTypes.bool.isRequired,
//   maxBands: PropTypes.number.isRequired,
//   sortBy: PropTypes.oneOf(Object.values(BandSortTypes)).isRequired,
// };

export const BandList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedBandList);

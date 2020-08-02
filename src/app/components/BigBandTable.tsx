// import PropTypes from "prop-types";
import React, { SyntheticEvent } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import ToggleButton from "react-bootstrap/ToggleButton";
import { connect, ConnectedProps } from "react-redux";
import { AuthenticationStatuses, BandSortTypes } from "../store/statuses";
import { bandActions } from "../store/slices/bands-slice";
import { sortAndLimitBands } from "./utility/limit-sort-bands";
import { BandModButtonGroup } from "./BandModButtonGroup";
import { RootState } from "../store/";
import { Types as MongooseTypes } from "mongoose";
import { createUserProfileUrl } from "./utility/create-user-profile-url";
import { Link } from "react-router-dom";

const defaultBandsPerFetch = 20;

// TODO: Something should display when we have no bands to display!

function mapStateToProps(state: RootState) {
  return {
    appIsFetchingBands: state.bands.pendingFetches > 0,
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
      modificationValue: number,
      modifyingUserId?: MongooseTypes.ObjectId,
      undoValue?: number
    ) => {
      if (modifyingUserId) {
        dispatch(
          bandActions.requestModifyBandScore({
            targetBandId,
            modifyingUserId,
            modificationValue,
            undoValue,
          })
        );
      }
    },
    requestFetchBands: (maxBands: number, sortBy: BandSortTypes) => {
      dispatch(bandActions.requestFetchBands({ maxBands, sortBy }));
    },
  };
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
type BigBandTableProps = ConnectedProps<typeof reduxConnector>;

type BigBandTableState = {
  sortType: BandSortTypes;
  bandsPerFetch: number;
  shouldFetchBands: boolean;
  maxBandsDisplayed: number;
};

// UnconnectedBigBandTable.propTypes = {
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
// };

class UnconnectedBigBandTable extends React.Component<
  BigBandTableProps,
  BigBandTableState
> {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     sortType: BandSortTypes.MOST_RECENT,
  //     bandsPerFetch: defaultBandsPerFetch,
  //     shouldFetchBands: false,
  //     maxBandsDisplayed: defaultBandsPerFetch,
  //   };
  // }
  state = {
    sortType: BandSortTypes.MOST_RECENT,
    bandsPerFetch: defaultBandsPerFetch,
    shouldFetchBands: false,
    maxBandsDisplayed: defaultBandsPerFetch,
  };

  componentDidMount() {
    this.props.requestFetchBands(this.state.bandsPerFetch, this.state.sortType);
  }

  componentDidUpdate(
    prevProps: BigBandTableProps,
    prevState: BigBandTableState
  ) {
    console.log("this.state.maxBandsDisplayed: ", this.state.maxBandsDisplayed);
    console.log("prevState.maxBandsDisplayed: ", prevState.maxBandsDisplayed);
    if (
      this.state.maxBandsDisplayed > prevState.maxBandsDisplayed ||
      this.state.shouldFetchBands
    ) {
      this.props.requestFetchBands(
        this.state.maxBandsDisplayed,
        this.state.sortType
      );
      this.setState({ shouldFetchBands: false });
    }

    if (this.state.sortType !== prevState.sortType) {
      this.setState({
        maxBandsDisplayed: this.state.bandsPerFetch,
        shouldFetchBands: true,
      });
    }
  }

  setSortType(newType: BandSortTypes) {
    this.setState({ sortType: newType });
  }

  // TODO: This only works after the second push, very strange
  loadMore() {
    this.setState((state) => {
      return {
        maxBandsDisplayed: state.maxBandsDisplayed + state.bandsPerFetch,
      };
    });
    // this.props.requestFetchBands(
    //   this.state.maxBandsDisplayed,
    //   this.state.sortType
    // );
  }

  getUserModificationToBand(thisBandId: MongooseTypes.ObjectId) {
    const modification = this.props.usersModifications.find(
      (modification) => modification.targetBandId === thisBandId
    );
    if (modification) return modification.value;
    else return 0;
  }

  render() {
    // TODO: Should we have some notification that bands are being fetched?
    const desiredBands = sortAndLimitBands(
      this.props.bands,
      this.state.sortType,
      this.state.maxBandsDisplayed
    );

    const sortRadios = [
      { value: BandSortTypes.BEST, name: "Best" },
      { value: BandSortTypes.WORST, name: "Worst" },
      { value: BandSortTypes.MOST_RECENT, name: "Most Recent" },
    ];

    const { userIsAuthenticated } = this.props;

    return (
      <Card>
        <Card.Header>
          <ButtonGroup toggle>
            {sortRadios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                type="radio"
                value={radio.value}
                name="sortRadio"
                checked={radio.value === this.state.sortType}
                onChange={(e: SyntheticEvent) => {
                  e.preventDefault();
                  // TODO: Figure out what's going on with this type casting
                  const currentTarget = e.currentTarget as typeof e.currentTarget & {
                    value: string;
                  };
                  console.log("currentTarget", currentTarget);
                  const sortTypeAsNumber: number = parseInt(
                    currentTarget.value
                  );
                  console.log("sortTypeAsNumber", sortTypeAsNumber);
                  this.setSortType(sortTypeAsNumber);
                }}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Card.Header>
        <Card.Body>
          <Table size="sm" striped bordered>
            <tbody>
              {desiredBands.map((band) => (
                <tr key={String(band._id)}>
                  <td>
                    <BandModButtonGroup
                      userIsAuthorized={userIsAuthenticated}
                      modPerformed={this.getUserModificationToBand(band._id)}
                      modifyBand={(modValue, undoValue) =>
                        this.props.addPointsTo(
                          band._id,
                          modValue,
                          this.props.userId,
                          undoValue
                        )
                      }
                      currentScore={band.score}
                    />{" "}
                    <Badge variant="secondary">{band.score}</Badge> {band.name}{" "}
                    <span className={"font-weight-lighter"}>
                      from  <Link to={createUserProfileUrl(String(band.ownerId))}>{band.ownerName}</Link>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="secondary" block onClick={() => this.loadMore()}>
            Show me more...
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export const BigBandTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedBigBandTable);

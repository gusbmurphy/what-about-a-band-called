import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import {
  beginModifyBandScore,
  requestFetchBands,
} from "../store/actions/creators";
import { AuthenticationStatuses, BandSortTypes } from "../store/actions/types";
import { sortAndLimitBands } from "./utility/limit-sort-bands";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

class UnconnectedBigBandTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: BandSortTypes.MOST_RECENT,
      bandsPerFetch: 20,
    };
  }

  componentDidMount() {
    this.props.requestFetchBands(this.state.bandsPerFetch, this.state.sortType);
  }

  setSortType(newType) {
    // TODO: Right now we set the state before the app has finished fetching the bands, how can we avoid that?
    this.props.requestFetchBands(this.state.bandsPerFetch, this.state.sortType);
    this.setState({ sortType: newType });
  }

  render() {
    if (this.props.appIsFetchingBands) {
      return <h1>were fetching baby</h1>;
    }
    let desiredBands = sortAndLimitBands(
      this.props.bands,
      this.state.sortType,
      this.state.bandsPerFetch
    );

    let sortRadios = [
      { value: BandSortTypes.BEST, name: "Best" },
      { value: BandSortTypes.WORST, name: "Worst" },
      { value: BandSortTypes.MOST_RECENT, name: "Most Recent" },
    ];
    return (
      <>
        <ButtonGroup toggle>
          {sortRadios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              value={radio.value}
              name="sortRadio"
              checked={radio.value === this.state.sortType}
              onChange={(e) => this.setSortType(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        <Table>
          <tbody>
            {desiredBands.map((band) => (
              <tr key={band._id}>
                <td>
                  <Button variant="outline-primary" size="sm">
                    -
                  </Button>{" "}
                  {band.score}{" "}
                  <Button variant="outline-primary" size="sm">
                    +
                  </Button>
                </td>
                <td>{band.name}</td>
                <td>from {band.ownerName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="secondary" block>
          Show me more...
        </Button>
      </>
    );
  }
}

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
      dispatch(beginModifyBandScore(targetBandId, userId, modificationValue));
    },
    requestFetchBands: (maxBands, sortBy) => {
      dispatch(requestFetchBands(maxBands, sortBy));
    },
  };
}

UnconnectedBigBandTable.propTypes = {
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
};

export const BigBandTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedBigBandTable);

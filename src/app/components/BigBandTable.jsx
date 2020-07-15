import PropTypes from "prop-types";
import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import ToggleButton from "react-bootstrap/ToggleButton";
import { connect } from "react-redux";
import { AuthenticationStatuses, BandSortTypes } from "../store/statuses";
import { bandActions } from "../store/slices/bands-slice";
import { sortAndLimitBands } from "./utility/limit-sort-bands";

let defaultBandsPerFetch = 20;

// TODO: Something should display when we have no bands to display!

class UnconnectedBigBandTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: BandSortTypes.MOST_RECENT,
      bandsPerFetch: defaultBandsPerFetch,
      shouldFetchBands: false,
      maxBandsDisplayed: defaultBandsPerFetch,
    };
  }

  componentDidMount() {
    this.props.requestFetchBands(this.state.bandsPerFetch, this.state.sortType);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.maxBandsDisplayed < prevState.maxBandsDisplayed ||
      this.state.shouldFetchBands
    ) {
      this.props.requestFetchBands(
        this.state.bandsPerFetch,
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

  setSortType(newType) {
    this.setState({ sortType: newType });
  }

  loadMore() {
    this.setState((state) => {
      return {
        maxBandsDisplayed: state.maxBandsDisplayed + state.bandsPerFetch,
      };
    });
    this.props.requestFetchBands(
      this.state.maxBandsDisplayed,
      this.state.sortType
    );
  }

  render() {
    // TODO: Should we have some notification that bands are being fetched?
    let desiredBands = sortAndLimitBands(
      this.props.bands,
      this.state.sortType,
      this.state.maxBandsDisplayed
    );

    let sortRadios = [
      { value: BandSortTypes.BEST, name: "Best" },
      { value: BandSortTypes.WORST, name: "Worst" },
      { value: BandSortTypes.MOST_RECENT, name: "Most Recent" },
    ];
    return (
      <Container>
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
        <Table size="sm">
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
        <Button variant="secondary" block onClick={() => this.loadMore()}>
          Show me more...
        </Button>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    appIsFetchingBands: state.bands.pendingFetches > 0,
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
      dispatch(
        bandActions.requestModifyBandScore({
          targetBandId,
          userId,
          modificationValue,
        })
      );
    },
    requestFetchBands: (maxBands, sortBy) => {
      dispatch(bandActions.requestFetchBands({ maxBands, sortBy }));
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

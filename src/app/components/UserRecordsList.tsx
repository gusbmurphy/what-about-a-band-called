import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { UserRecordSortTypes } from "../store/statuses";
import {
  userRecordsActions,
  UserRecord,
} from "../store/slices/user-records-slice";
import { RootState } from "../store/";
import { sortAndLimitUserRecords } from "./utility/limit-sort-user-records";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { createUserProfileUrl } from "../components/utility/create-user-profile-url"

function mapStateToProps(state: RootState) {
  return {
    appIsFetchingRecords: state.userRecords.pendingFetches > 0,
    records: [...state.userRecords.items],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestUserRecords: (
      numOfRecords: number,
      sortType: UserRecordSortTypes
    ) => {
      dispatch(
        userRecordsActions.requestFetchUserRecords({ numOfRecords, sortType })
      );
    },
  };
}

function ListEntryBadge(props: {
  sortType: UserRecordSortTypes;
  record: UserRecord;
}) {
  switch (props.sortType) {
    case UserRecordSortTypes.HIGHEST_AVERAGE_SCORE:
      return <Badge variant="secondary">{props.record.averageScore.toFixed(2)}</Badge>;
    case UserRecordSortTypes.HIGHEST_SCORE:
      return <Badge variant="secondary">{props.record.totalScore}</Badge>;
    case UserRecordSortTypes.MOST_NAMES_CONTRIBUTED:
      return <Badge variant="secondary">{props.record.namesContributed}</Badge>;
    default:
      return <Badge variant="secondary">?</Badge>;
  }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
type UserRecordsListProps = ConnectedProps<typeof reduxConnector> & {
  maxRecords: number;
  sortType: UserRecordSortTypes;
};

class UnconnectedUserRecordsList extends React.Component<UserRecordsListProps> {
  componentDidMount() {
    this.props.requestUserRecords(this.props.maxRecords, this.props.sortType);
  }

  render() {
    if (this.props.appIsFetchingRecords) {
      return <div>Loading user records...</div>;
    }

    const desiredRecords = sortAndLimitUserRecords(
      this.props.records,
      this.props.sortType,
      this.props.maxRecords
    );

    return (
      <Table size="sm" striped bordered>
        <tbody>
          {desiredRecords.map((record, index) => (
            <tr key={String(record.id)}>
              <td>{index + 1}</td>
              <td>
                <Link to={createUserProfileUrl(String(record.id))}>{record.name}</Link>{" "}
                <ListEntryBadge
                  sortType={this.props.sortType}
                  record={record}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export const UserRecordsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedUserRecordsList);

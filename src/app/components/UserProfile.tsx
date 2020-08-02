import React from "react";
import { RootState } from "../store";
import { connect, ConnectedProps } from "react-redux";
import { Types as MongooseTypes } from "mongoose";
import {
  UserProfileType,
  userProfileActions,
} from "../store/slices/user-profile-slice";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/esm/Table";
import Badge from "react-bootstrap/esm/Badge";
import { getTimeSince } from "../components/utility/get-time-since";

function mapStateToProps(state: RootState) {
  return {
    fetchStatus: state.userProfile.fetchStatus,
    profile: state.userProfile.profile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestFetchProfile: (targetId: MongooseTypes.ObjectId) => {
      dispatch(userProfileActions.requestFetchUserProfile({ targetId }));
    },
  };
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
type UserProfileProps = ConnectedProps<typeof reduxConnector> & {
  id: MongooseTypes.ObjectId;
};

class UnconnectedUserProfile extends React.Component<UserProfileProps> {
  componentDidMount() {
    this.props.requestFetchProfile(this.props.id);
  }

  render() {
    const { profile } = this.props;
    if (profile) {
      return (
        <Container>
          <Card>
            <Card.Header>
              <h5>{profile.name}</h5>
            </Card.Header>
            <Card.Body>
              <Card>
                <Card.Body>
                  <Row>
                    <Col md={4}>
                      <div>
                        Total score: <b>{profile.totalScore}</b>
                      </div>
                      <div>
                        Average score: <b>{profile.averageScore}</b>
                      </div>
                      <div>
                        Names contributed: <b>{profile.namesContributed}</b>
                      </div>
                    </Col>
                    <Col md={8}>
                      <Table size="sm" striped bordered>
                        <tbody>
                          {profile.bands.map((band) => (
                            <tr key={String(band._id)}>
                              <td>
                                <Badge variant="secondary">{band.score}</Badge>{" "}
                                <b>{band.name}</b> (created {getTimeSince(new Date(band.createdOn))} ago)
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </Container>
      );
    } else {
      return null;
    }
  }
}

export const UserProfile = reduxConnector(UnconnectedUserProfile);

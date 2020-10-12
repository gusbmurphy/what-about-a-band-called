import { Types as MongooseTypes } from "mongoose";
import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/esm/Badge";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/esm/Table";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { getTimeSince } from "../components/utility/get-time-since";
import { RootState } from "../store";
import { userProfileActions } from "../store/slices/user-profile-slice";
import BandTable from "./BandTable";

export function UserProfile({
  userId,
}: {
  userId: MongooseTypes.ObjectId;
}): JSX.Element {
  const { profile } = useSelector(
    (state: RootState) => state.userProfile
  );

  const dispatch = useDispatch();
  function fetchProfile() {
    dispatch(userProfileActions.requestFetchUserProfile({ targetId: userId }));
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Container className={"mb-5"}>
      <Card>
        {profile ? (
          <>
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
                        Average score: <b>{profile.averageScore.toFixed(2)}</b>
                      </div>
                      <div>
                        Names contributed: <b>{profile.namesContributed}</b>
                      </div>
                    </Col>
                    <Col md={8}>
                      <BandTable bands={profile.bands} defaultNumToDisplay={10} />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Card.Body>
          </>
        ) : (
          <p>Loading</p>
        )}
      </Card>
    </Container>
  );
}
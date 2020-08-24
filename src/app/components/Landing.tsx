import React from "react";
import { CreateBandForm } from "./CreateBandForm";
import { ControlledBandTable } from "./ControlledBandTable";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { UserRecordsList } from "./UserRecordsList";
import { UserRecordSortTypes } from "../store/statuses";
import Jumbotron from "react-bootstrap/Jumbotron";

export function Landing() {
  return (
    <>
      <Container>
        <Row className={"mb-5"}>
          <Col md={8} className={"mb-3"}>
            <CreateBandForm />
            <ControlledBandTable />
          </Col>
          <Col md={4}>
            <Card className={"mb-3"}>
              <Card.Header>
                <h5>Most Names Contributed</h5>
              </Card.Header>
              <Card.Body>
                <UserRecordsList
                  maxRecords={10}
                  sortType={UserRecordSortTypes.MOST_NAMES_CONTRIBUTED}
                />
              </Card.Body>
            </Card>
            <Card className={"mb-3"}>
              <Card.Header>
                <h5>Highest Average Score</h5>
              </Card.Header>
              <Card.Body>
                <UserRecordsList
                  maxRecords={10}
                  sortType={UserRecordSortTypes.HIGHEST_AVERAGE_SCORE}
                />
              </Card.Body>
            </Card>
            <Card className={"mb-3"}>
              <Card.Header>
                <h5>Highest Score</h5>
              </Card.Header>
              <Card.Body>
                <UserRecordsList
                  maxRecords={10}
                  sortType={UserRecordSortTypes.HIGHEST_SCORE}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { BandSortTypes } from "../store/statuses";
import { BandList } from "./BandList";

// TODO: Something should display when we have no bands to display!

export const TheLists = () => (
  <Container>
    <Row>
      <Col>
        <BandList maxBands={10} sortBy={BandSortTypes.MOST_RECENT} />
      </Col>
      <Col>
        <BandList maxBands={10} sortBy={BandSortTypes.WORST} />
      </Col>
      <Col>
        <BandList maxBands={10} sortBy={BandSortTypes.BEST} />
      </Col>
    </Row>
  </Container>
);

import React from "react";
import { BandList } from "./BandList";
import { BandSortTypes } from "../store/actions/types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

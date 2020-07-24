import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { BandSortTypes } from "../store/statuses";
import { BandList } from "./BandList";
import CardGroup from "react-bootstrap/CardGroup";

// TODO: Something should display when we have no bands to display!

export const TheLists = () => (
  <Container fluid>
    <Row className="justify-content-sm-center">
      <BandList maxBands={10} sortBy={BandSortTypes.MOST_RECENT} />
      <BandList maxBands={10} sortBy={BandSortTypes.WORST} />
      <BandList maxBands={10} sortBy={BandSortTypes.BEST} />
    </Row>
  </Container>
);

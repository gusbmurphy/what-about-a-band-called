import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { connect } from "react-redux";

const UnconnectedNavigation = () => (
  <Navbar>
    <Navbar.Brand href="/">wababc?</Navbar.Brand>
    <Nav.Link href="/bands">Bands</Nav.Link>
    <Nav.Link href="/login">Login</Nav.Link>
  </Navbar>
);

export const Navigation = connect((state) => state)(UnconnectedNavigation);

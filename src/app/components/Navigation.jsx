import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const UnconnectedNavigation = () => (
  <Navbar>
    <Navbar.Brand href="/">wababc?</Navbar.Brand>
    <Nav.Link href="/bands">Bands</Nav.Link>
    <Nav.Link href="/login">Login</Nav.Link>
    {/* <Link to="/bands">Bands</Link>
    <Link to="/newband">New Band</Link>
    <Link to="/login">Login</Link>
    <Link to="/new-user">New User</Link> */}
  </Navbar>
);

export const Navigation = connect((state) => state)(UnconnectedNavigation);

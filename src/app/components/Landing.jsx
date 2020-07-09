import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { TheLists } from "./TheThreeLists";

export const Landing = () => (
  <>
    <Jumbotron>
      <h1 className="landingTitle">What about a band called...</h1>
    </Jumbotron>
    <TheLists />
  </>
);

import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { TheLists } from "./TheThreeLists";
import { CreateBandForm } from "./CreateBandForm";

export const Landing = () => (
  <>
    <Jumbotron>
      <h1 className="landingTitle">What about a band called...</h1>
      <CreateBandForm />
    </Jumbotron>
    <TheLists />
  </>
);

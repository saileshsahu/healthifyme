import React, { Component, Fragment } from "react";
import Header from "Components/Header/Header";
import Login from "Components/Login/Login";
import { Container } from "./Homepage.style.js";

const Homepage = function (props) {
  return (
    <Fragment>
      <Header text="Accounts" />
      <Container>
        <Login />
      </Container>
    </Fragment>
  );
};

export default Homepage;

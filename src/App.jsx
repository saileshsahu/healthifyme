import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Router";

export default function (props) {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

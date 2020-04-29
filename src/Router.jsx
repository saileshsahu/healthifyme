import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./views/Homepage/Homepage";

export default function () {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="*" component={() => "Page not found"} />
    </Switch>
  );
}

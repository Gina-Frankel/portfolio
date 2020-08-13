import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  About,
  NavBar,
  ProjectCardContainer,
  ProjectProcessContainer,
} from "../index";
export function Routes() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/Projects" component={ProjectCardContainer} />
        <Route path="/test" component={ProjectProcessContainer} />

        <Route path="/" component={About} />
      </Switch>
    </Router>
  );
}

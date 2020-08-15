import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  About,
  NavBar,
  ProjectCardContainer,
  ProjectProcessContainer,
  ProjectProcessRoutes,
} from "../index";
export function Routes() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/Projects" component={ProjectCardContainer} />

        <Route exact path="/" component={About} />
        <ProjectProcessRoutes />
      </Switch>
    </Router>
  );
}

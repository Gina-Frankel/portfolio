import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  NavBar,
  ProjectCardContainer,
  ProjectProcessRoutes,
} from "../index";
export function Routes() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/Projects" component={ProjectCardContainer} />

        <Route exact path="/" component={Home} />
        <ProjectProcessRoutes />
      </Switch>
    </Router>
  );
}

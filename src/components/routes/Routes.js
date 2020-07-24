import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About, NavBar, ProjectCardContainer } from "../index";
export function Routes() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/Projects">
          <ProjectCardContainer />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About, AboutLink, ProjectCardContainer, ProjectLink } from "../index";
export function Routes() {
  return (
    <Router>
      <div id="navBar">
        <div className="row">
          <AboutLink />
          <ProjectLink />
        </div>
      </div>

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

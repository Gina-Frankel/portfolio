import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About, NavBar, ProjectCardContainer } from "../index";
export function Routes() {
  return (
    <Router>
      <div className="row" id="navBar">
        <NavBar />
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

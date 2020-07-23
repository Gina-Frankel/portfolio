import React from "react";
import "./App.css";
import {
  About,
  AboutLink,
  LinkContainer,
  ProjectCardContainer,
  ProjectLink,
} from "../index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function App() {
  return (
    <div className="App ">
      <header className="App-header"></header>

      <body>
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

        <footer id="stickyFooter" className="bg-dark">
          <div className="container text-center">
            <LinkContainer />
          </div>
        </footer>
      </body>
    </div>
  );
}

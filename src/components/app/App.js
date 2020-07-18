import React from "react";
import "./App.css";
import "../projects/ProjectCardContainer";
import { ProjectCardContainer, LinkContainer } from "../index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <div className="container">
          <LinkContainer />
        </div>
        <h1>Gina Frankel</h1>

        <Router>
          <Link to="/Projects">
            <p>Projects</p>
          </Link>

          <Switch>
            <Route path="/Projects">
              <ProjectCardContainer />
            </Route>
          </Switch>
        </Router>
      </body>
    </div>
  );
}

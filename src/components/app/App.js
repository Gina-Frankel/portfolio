import React from "react";
import "./App.css";
import "../projects/ProjectCardContainer";
import { ProjectCardContainer, LinkContainer, About } from "../index";
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
        <About />

        <Router>
          <Link to="/Projects">
            <p>Projects</p>
          </Link>
          <Link to="/About">
            <p>About</p>
          </Link>

          <Switch>
            <Route path="/Projects">
              <ProjectCardContainer />
            </Route>
            <Route path="/About">
              <About />
            </Route>
          </Switch>
        </Router>
      </body>
    </div>
  );
}

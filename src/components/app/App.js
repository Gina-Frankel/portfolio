import React from "react";
import "./App.css";
import "../projects/ProjectCardContainer";
import { ProjectCardContainer, LinkContainer } from "../index";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <div className="container">
          <LinkContainer />
        </div>
        <div className="container">
          <Router>
            <p>
              <Link to="/Projects">
                <p>Projects</p>
              </Link>
            </p>
            <p></p>
            <switch>
              <Route path="/Projects">
                <ProjectCardContainer />
              </Route>
            </switch>
          </Router>
        </div>
      </body>
    </div>
  );
}

import React from "react";
import "./App.css";
import "../projects/ProjectCardContainer";
import { ProjectCardContainer, InterestContainer } from "../index";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { InterestsContainer } from "../interests/InterestsContainer";

export function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <a
          className="App-link"
          href="https://github.com/Gina-Frankel/CV"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github CV
        </a>

        <div>
          <Router>
            <p>
              <Link to="/Projects">Projects</Link>
            </p>
            <p>
              <Link to="/Interests"> Interests</Link>
            </p>
            <switch>
              <Route path="/Projects">
                <ProjectCardContainer />
              </Route>
              <Route path="/Interests">
                <InterestsContainer />
              </Route>
            </switch>
          </Router>
        </div>
      </body>
    </div>
  );
}

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
            <div>
              <Link to="/Projects">Projects</Link>
              <Route path="/Projects">
                <ProjectCardContainer />
              </Route>
            </div>
          </Router>
        </div>
        <Router>
          <div>
            <Link to="/Interests"> Interests</Link>

            <Route path="/Interests">
              <InterestsContainer />
            </Route>
          </div>
        </Router>
      </body>
    </div>
  );
}

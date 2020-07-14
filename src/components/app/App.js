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

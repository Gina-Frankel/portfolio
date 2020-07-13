import React from "react";
import "./App.css";
import "../projects/ProjectCardContainer";
import Projects from "../projects/ProjectCardContainer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
              <li>
                <Link to="/Projects">Projects</Link>
              </li>
              <Route path="/Projects">
                <Projects />
              </Route>
            </div>
          </Router>
        </div>
      </body>
    </div>
  );
}

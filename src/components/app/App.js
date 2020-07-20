import React from "react";
import "./App.css";
import "../projects/ProjectCardContainer";
import { ProjectCardContainer, LinkContainer, About } from "../index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function App() {
  return (
    <div className="App ">
      <header className="App-header"></header>

      <body>
        <Router>
          <div className="container">
            <div className="row">
              <div className="col-1  offset-md-9">
                <Link to="/">
                  <p>About</p>
                </Link>
              </div>

              <div className="col">
                <Link to="/Projects">
                  <p>Projects</p>
                </Link>
              </div>
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

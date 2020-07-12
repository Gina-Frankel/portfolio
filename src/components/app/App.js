import React from 'react';
import './App.css';
import '../projects/ProjectCardContainer'
import HomePage from '../homepage/Homepage'
import Projects from '../projects/ProjectCardContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <body>
      {/* <div><HomePage/></div> */}

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
              <Link to='/Projects'>Projects</Link>
            </li>
            <Route path='/Projects' >
              <Projects/> 
            </Route>
          </div>
        </Router> 
        </div>
      </body>
    </div>

  );
}


export default App;

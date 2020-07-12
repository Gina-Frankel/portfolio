import React from 'react';
import './App.css';
import '../projects/Projects'
import Projects from '../projects/Projects';
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
        <p>

        </p>
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


{/* <Router>
<div>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  </nav> */}
//   <Switch>
//   <Route path="/about">
//     <About />
//   </Route>
//   <Route path="/users">
//     <Users />
//   </Route>
//   <Route path="/">
//     <Home />
//   </Route>
// </Switch>
// </div>
// </Router>
// );
export default App;

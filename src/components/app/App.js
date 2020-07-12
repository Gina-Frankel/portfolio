import React from 'react';
import './App.css';
import '../portfolio/Portfolio'
import Portfolio from '../portfolio/Portfolio';

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
      <div><Portfolio /> </div>
      </body>
    </div>
  );
}

export default App;

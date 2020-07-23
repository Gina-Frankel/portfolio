import React from "react";
import "./App.css";
import { LinkContainer, Routes } from "../index";

export function App() {
  return (
    <div className="App ">
      <header className="App-header"></header>

      <body>
        <Routes />
        <footer id="stickyFooter" className="bg-dark">
          <div className="container text-center">
            <LinkContainer />
          </div>
        </footer>
      </body>
    </div>
  );
}

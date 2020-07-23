import React from "react";
import "./App.css";
import { Footer, Routes } from "../index";

export function App() {
  return (
    <div className="App ">
      <header className="App-header"></header>

      <body>
        <Routes />
        <footer id="stickyFooter" className="bg-dark">
          <div className="container text-center">
            <Footer />
          </div>
        </footer>
      </body>
    </div>
  );
}

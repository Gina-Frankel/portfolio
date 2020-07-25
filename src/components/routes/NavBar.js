import React from "react";

import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="navbar  sticky-top navbar-expand bg-light  ">
      <div className="container">
        <ul className=" navbar-nav mr-auto ">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <p>About</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Projects" className="nav-link">
              <p>Projects</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

import React from "react";
import "./navBarLinks.css";

import { NavLink } from "react-router-dom";

export function NavBarLinks() {
  return (
    <ul className=" navbar-nav mr-auto ">
      <li className="nav-item">
        <NavLink
          to="/"
          exact={true}
          activeClassName="current"
          className="nav-link"
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/Projects" activeClassName="current" className="nav-link">
          Projects
        </NavLink>
      </li>
    </ul>
  );
}

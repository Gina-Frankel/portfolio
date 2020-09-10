import React from "react";
import "./navPageLinks.css";

import { NavLink } from "react-router-dom";

export function NavPageLinks() {
  return (
    <ul className=" navbar-nav mr-auto ">
      <li className="nav-item">
        <NavLink to="/" activeClassName="current" className="nav-link">
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/Projects" className="nav-link">
          Projects
        </NavLink>
      </li>
    </ul>
  );
}

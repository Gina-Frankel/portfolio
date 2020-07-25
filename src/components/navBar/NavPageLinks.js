import React from "react";

import { Link } from "react-router-dom";

export function NavPageLinks() {
  return (
    <ul className=" navbar-nav mr-auto ">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Projects" className="nav-link">
          Projects
        </Link>
      </li>
    </ul>
  );
}

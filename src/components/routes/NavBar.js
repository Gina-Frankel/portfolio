import React from "react";

import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div className="container ">
      <nav className="navbar sticky navbar-expand  ">
        <ul className=" navbar-nav ml-auto ">
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
      </nav>
    </div>
  );
}

// <div className="container">
//
//     <div className="p-2 bd-highlight">
//       <AboutLink />
//     </div>
//     <div className="p-2 bd-highlight">
//       <ProjectLink />
//     </div>
//   </div>
// </div>

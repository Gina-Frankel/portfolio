import React from "react";
import { NavLinks } from "../index";

export function NavBar() {
  return (
    <nav className="navbar  sticky-top navbar-expand bg-light  ">
      <div className="container">
        <NavLinks />
      </div>
    </nav>
  );
}

import React from "react";

import "./navBar.css";
import { ContactLinkList, NavBarLinks } from "../index";

export function NavBar() {
  return (
    <nav className="navbar sticky-top navbar-expand color px-5 ">
      <NavBarLinks />
      <ContactLinkList />
    </nav>
  );
}

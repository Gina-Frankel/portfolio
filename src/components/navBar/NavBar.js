import React from "react";
import { ContactLinkList, NavBarLinks } from "../index";

export function NavBar() {
  return (
    <nav className="navbar  sticky-top navbar-expand px-5 ">
      <NavBarLinks />
      <ContactLinkList />
    </nav>
  );
}

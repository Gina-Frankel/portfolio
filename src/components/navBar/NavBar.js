import React from "react";
import { ContactLinkList, NavBarLinks } from "../index";

export function NavBar() {
  return (
    <nav className="navbar  sticky-top navbar-expand bg-dark  ">
      <div className="container py-4">
        <NavBarLinks />
        <ContactLinkList />
      </div>
    </nav>
  );
}

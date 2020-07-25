import React from "react";
import { ContactLinkList, NavPageLinks } from "../index";

export function NavBar() {
  return (
    <nav className="navbar  sticky-top navbar-expand bg-light  ">
      <div className="container">
        <NavPageLinks />
        <ContactLinkList />
      </div>
    </nav>
  );
}

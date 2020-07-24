import React from "react";
import { AboutLink, ProjectLink } from "../index";

export function NavBar() {
  return (
    <div className="container">
      <div className="d-flex flex-row bd-highlight justify-content-end">
        <div className="p-2 bd-highlight">
          <AboutLink />
        </div>
        <div className="p-2 bd-highlight">
          <ProjectLink />
        </div>
      </div>
    </div>
  );
}

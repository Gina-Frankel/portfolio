import React from "react";
import { Link } from "react-router-dom";

export function ProjectLink() {
  return (
    <div className="col">
      <Link to="/Projects">
        <p className="links">Projects</p>
      </Link>
    </div>
  );
}

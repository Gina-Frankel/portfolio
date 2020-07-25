import React from "react";
import { Link } from "react-router-dom";

export function ProjectLink() {
  return (
    <Link to="/Projects">
      <p className="links">Projects</p>
    </Link>
  );
}

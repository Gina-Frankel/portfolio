import React from "react";
import { Link } from "react-router-dom";

export function AboutLink() {
  return (
    <Link to="/">
      <p className="links">About</p>
    </Link>
  );
}

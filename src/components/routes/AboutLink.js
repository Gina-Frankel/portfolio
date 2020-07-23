import React from "react";
import { Link } from "react-router-dom";

export function AboutLink() {
  return (
    <div className="col-1  offset-md-9">
      <Link to="/">
        <p className="links">About</p>
      </Link>
    </div>
  );
}

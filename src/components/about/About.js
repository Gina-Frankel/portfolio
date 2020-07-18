import React from "react";
import { LinkContainer } from "../index";

export function About() {
  return (
    <div className="container">
      <div className="row">
        <h1>Gina Frankel</h1>
      </div>
      <div className="row">
        <h2>Junior Full Stack Developer</h2>
      </div>

      <div className="row">
        <p>
          I am driven by a need to solve problems and to express creativity.{" "}
        </p>
      </div>

      <LinkContainer />
    </div>
  );
}

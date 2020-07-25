import React from "react";
import "./About.css";

export function About() {
  return (
    <div className="container">
      <div className="row ">
        <h1 id="developerName" className="pt-5">
          Gina Frankel
        </h1>
      </div>
      <div className="row  py-2">
        <h2 id="jobDescription">Junior Full Stack Developer</h2>
      </div>

      <div className="row py-3">
        <p id="lead">
          I am driven by a need to solve problems and to express creativity.{" "}
        </p>
      </div>
    </div>
  );
}

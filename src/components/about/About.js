import React from "react";
import "./About.css";

export function About() {
  return (
    <div className="px-5">
      <div className="row justify-content-end ">
        <div className="col-9">
          <h1 id="developerName" className="text-right">
            Gina Frankel
          </h1>
        </div>
      </div>
      <div className="row justify-content-end ">
        <div className="col-7">
          <h4 id="lead" className="text-right">
            Junior Full Stack Developer
          </h4>
        </div>
      </div>
      <div className="row  py-5"></div>
      <div className="row  py-5"></div>
      <div className="row  py-5"></div>
      <h4 id="lead">Design </h4>
      <h4 id="lead"> Code </h4>
      <h4 id="lead"> Create </h4>
    </div>
  );
}

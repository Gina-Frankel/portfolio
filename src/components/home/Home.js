import React from "react";
import "./Home.css";

export function Home() {
  return (
    <div className="px-5 container-fluid vertical-stretch">
      <div className="row justify-content-start ">
        <div className="col-lg-7 col-md-12">
          <h1 id="developerName" className="text-left pt-3">
            Gina Frankel
          </h1>
        </div>
      </div>
      <div className="row justify-content-start ">
        <div className="col-lg-7 col-md-12">
          <h3 id="lead" className="text-left">
            Junior Full Stack Developer
          </h3>
        </div>
      </div>
      <div className="fixed-bottom px-5 py-5">
        <div className="row justify-content-end ">
          <h4 id="lead">Design </h4>
        </div>
        <div className="row justify-content-end ">
          <h4 id="lead">Code </h4>
        </div>
        <div className="row justify-content-end ">
          <h4 id="lead">Create </h4>
        </div>
      </div>
    </div>
  );
}

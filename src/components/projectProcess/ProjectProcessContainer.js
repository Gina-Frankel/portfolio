import React from "react";

import { ProjectProcessLinks } from "../index";
import "./ProjectProcessContainer.css";

export function ProjectProcessContainer(props) {
  let processImage;
  if (props.project.process.image) {
    processImage = (
      <img
        className="img-fluid"
        src={props.project.process.image}
        alt="linen"
      ></img>
    );
  }

  return (
    <div className="container ">
      <div className="row pt-5">
        <div className="col-lg-12 "></div>
        <div className="col-lg-5">
          <div className="jumpotron">
            <h1 className="display-4  "> {props.project.name}</h1>
          </div>
          {props.project.process.introduction}
          <ProjectProcessLinks project={props.project} />
        </div>

        <div className=" col-sm-12  col-lg-7 pb-5  ">
          <img
            className="img-fluid"
            src={props.project.image}
            alt="projectImage"
          ></img>
        </div>

        <div className="offset-lg-5 col-lg-7 ">
          <h3> Design process </h3>
          <p>{props.project.process.explanation}</p>
          {processImage}
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";

import { ProjectProcessLinks } from "../index";
import "./ProjectProcessContainer.css";

export function ProjectProcessContainer(props) {
  let processImage;
  if (props.project.process.image) {
    processImage = (
      <img
        className="img-fluid"
        src={props.project.process.image}
        alt="process"
      ></img>
    );
  }
  let processImage2;
  if (props.project.process.image2) {
    processImage2 = (
      <img
        className="img-fluid"
        src={props.project.process.image2}
        alt="process"
      ></img>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container ">
      <div className="row pt-5">
        <div className="col-lg-12 "></div>
        <div className="col-lg-5">
          <div className="jumpotron">
            <h1 className="display-4  "> {props.project.name}</h1>
            <h5>{props.project.technologies}</h5>
            <ProjectProcessLinks project={props.project} />
            <br></br>
          </div>

          <p>{props.project.process.introduction}</p>
        </div>

        <div className=" col-sm-12  col-lg-7 px-5 ">
          <img
            className="img-fluid"
            src={props.project.image}
            alt="projectImage"
          ></img>
        </div>
      </div>

      <p>{props.project.process.explanation}</p>
      <h3 className="text-center">{props.project.process.imageDescription}</h3>
      {processImage}
      <h3 className="text-center">{props.project.process.image2Description}</h3>
      {processImage2}
    </div>
  );
}

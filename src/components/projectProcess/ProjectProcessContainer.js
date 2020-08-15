import React from "react";
// import projectList from "../../projects";
import background from "../../static/linen.jpg";
import { ProjectProcessLinks } from "../index";
import "./ProjectProcessContainer.css";

export function ProjectProcessContainer(props) {
  return (
    <div className="container ">
      <div className="row pt-5">
        <div className="col-lg-12 "></div>
        <div className="col-lg-5">
          <div className="jumpotron">
            <h1 className="display-4  "> {props.project.name}</h1>
          </div>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in "<p></p>
          {/* LINKS  */}
          <ProjectProcessLinks project={props.project} />
        </div>

        <div className=" col-sm-12  col-lg-7 pb-5  ">
          <img
            className="img-fluid"
            src={props.project.image}
            alt="linen"
          ></img>
        </div>

        <div className="offset-lg-5 col-lg-7 ">
          <h3> Design process </h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>

          <img className="img-fluid" src={background} alt="linen"></img>
        </div>
      </div>
    </div>
  );
}

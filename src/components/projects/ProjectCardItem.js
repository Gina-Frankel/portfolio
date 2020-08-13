import React from "react";
import "./ProjectCardItem.css";

export function ProjectCardItem(props) {
  console.log(props);

  let deployedLink;

  if (props.value.deployedLink) {
    deployedLink = (
      <a
        href={props.value.deployedLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Visit Site</p>
      </a>
    );
  }

  return (
    <div className="col-sm-12 col-lg-4 py-5  ">
      <img
        className="img-fluid"
        src={props.value.image}
        alt="project screenshot"
      ></img>

      <div className="card-background px-3 pb-5">
        <h3 className="pt-5 ">{props.value.name}</h3>
        <h5 className="py-2">{props.value.technologies}</h5>
        <p className="py-4">{props.value.summary}</p>
        <a
          href={props.value.repoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p> GitHub Repo </p>
        </a>
        {deployedLink}
      </div>
    </div>
  );
}

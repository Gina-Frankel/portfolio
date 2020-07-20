import React from "react";

export function ProjectCardItem(props) {
  return (
    <div className="col-sm-12 col-lg-6 py-5">
      <h3>{props.value.name}</h3>
      <p>{props.value.technologies}</p>
      <p>{props.value.summary}</p>
      <a href={props.value.repoLink} target="_blank" rel="noopener noreferrer">
        GitHub Repo
      </a>
      <img
        className="img-fluid"
        src={props.value.image}
        alt="project screenshot"
      ></img>
    </div>
  );
}

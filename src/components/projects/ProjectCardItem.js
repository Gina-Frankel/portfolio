import React from "react";
import "./ProjectCardItem.css";

export function ProjectCardItem(props) {
  console.log(props);
  return (
    <div className="col-sm-12 col-lg-4 py-5  ">
      <img
        className="img-fluid"
        src={props.value.image}
        alt="project screenshot"
      ></img>

      <div className="card-background px-3 pb-5">
        <h3 className="pt-5 ">{props.value.name}</h3>
        <p>{props.value.technologies}</p>
        <p>{props.value.summary}</p>
        <a
          href={props.value.repoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
}

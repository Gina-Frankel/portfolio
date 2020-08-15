import React from "react";

export function ProjectProcessLinks(props) {
  let deployedLink;
  if (props.project.deployedLink) {
    deployedLink = (
      <a
        href={props.project.deployedLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Visit Site</p>
      </a>
    );
  }
  return (
    <div>
      {" "}
      <a
        href={props.project.repoLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p> GitHub Repo </p>
      </a>
      {deployedLink}
    </div>
  );
}

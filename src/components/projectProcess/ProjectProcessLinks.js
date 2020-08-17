import React from "react";

export function ProjectProcessLinks(props) {
  let deployedLink;
  if (props.project.deployedLink) {
    deployedLink = (
      <span className="px-3">
        <a
          href={props.project.deployedLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Site
        </a>
      </span>
    );
  }

  const gitHubLink = (
    <span>
      <a
        href={props.project.repoLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repo
      </a>
    </span>
  );
  return (
    <div>
      <br></br>
      {gitHubLink}
      {deployedLink}
    </div>
  );
}

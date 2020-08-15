import React from "react";

export function ProjectProcessLinks(props) {
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
    </div>
  );
}

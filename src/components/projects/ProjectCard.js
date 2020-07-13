import React from "react";
import projectList from "../../projects";

function ProjectCard() {
  //console.dir(projectList);
  const projects = projectList.map((projectItem, index) => (
    //console.dir(projectItem.name)
    <li key={index}>{projectItem.name}</li>
  ));
  //console.dir(projects);
  return (
    <div>
      <ul>{projects}</ul>
      <a
        className="Project-Link"
        href="https://github.com/tommyrharper/mission-ctrl"
      >
        GitHub Repo
      </a>
    </div>
  );
}

export default ProjectCard;

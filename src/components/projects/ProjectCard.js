import React from "react";
import projectList from "../../projects";

function ProjectCard() {
  //console.dir(projectList);
  const projects = projectList.map((projectItem, index) => (
    //console.dir(projectItem.name)

    <li key={index}>
      <p> {projectItem.name}</p>
      <a className="Project-Link" href={projectItem.repoLink}>
        GitHub Repo
      </a>
      <p>{projectItem.technologies}</p>
      <br></br>
    </li>
  ));
  //console.dir(projects);
  return <ul>{projects}</ul>;
}

export default ProjectCard;

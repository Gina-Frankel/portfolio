import React from "react";
import projectList from "../../projects";

export function ProjectCard() {
  //console.dir(projectList);
  const projects = projectList.map((projectItem, index) => (
    //console.dir(projectItem.name)

    <div key={index}>
      <h3> {projectItem.name}</h3>
      <a className="Project-Link" href={projectItem.repoLink}>
        GitHub Repo
      </a>
      <p>{projectItem.summary}</p>
      <p className="font-weight-bold">{projectItem.technologies}</p>
      <br></br>
    </div>
  ));
  //console.dir(projects);
  return <ul>{projects}</ul>;
}

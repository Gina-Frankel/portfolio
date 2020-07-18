import React from "react";
import projectList from "../../projects";
import { ProjectCardItem } from "../index";

export function ProjectCard() {
  const projectItems = projectList.map((projectItem, index) => (
    <ProjectCardItem key={index} value={projectItem} />
  ));

  return <ul>{projectItems}</ul>;
}

// <div key={index}>
//   <h3> {projectItem.name}</h3>
//   <a className="Project-Link" href={projectItem.repoLink}>
//     GitHub Repo
//   </a>
//   <p>{projectItem.summary}</p>
//   <p className="font-weight-bold">{projectItem.technologies}</p>
//   <br></br>
// </div>
//console.dir(projects);

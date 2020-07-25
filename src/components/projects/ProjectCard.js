import React from "react";
import projectList from "../../projects";
import { ProjectCardItem } from "../index";

export function ProjectCard() {
  const projectItems = projectList.map((projectItem, index) => (
    <ProjectCardItem key={index} value={projectItem} />
  ));

  return <div className="row">{projectItems}</div>;
}

import React from "react";
import { ProjectCard } from "../index";

export function ProjectCardContainer() {
  return (
    <div className="container ">
      <div className="jumpotron">
        <h1 className="display-1  pt-5 ">Projects</h1>
        <hr class="my-4"></hr>
        <ProjectCard />
      </div>
    </div>
  );
}

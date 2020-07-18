import React from "react";

export function ProjectCardItem(props) {
  return (
    <div class="col-sm-12 col-lg-6 py-5">
      <h3>{props.value.name}</h3>
      <p>{props.value.technologies}</p>
      <p>{props.value.summary}</p>
      <a href={props.value.repoLink}>GitHub Repo</a>
      {/* <img src={props.value.image} alt="project image"></img> */}
    </div>
  );
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

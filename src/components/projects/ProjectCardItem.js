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

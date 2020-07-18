import React from "react";

export function ProjectCardItem(props) {
  return (
    <div>
      <h3>{props.value.name}</h3>
      <p>{props.value.technologies}</p>
    </div>
  );
}

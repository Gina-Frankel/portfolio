import React from "react";

export function ProjectCardItem(props) {
  console.log(props);
  return <h3>{props.value.name}</h3>;
}

import React from "react";
import projectList from "../../projects";
import background from "../../static/linen.jpg";

export function ProjectProcessContainer() {
  console.log(projectList[0].image);
  return (
    <div className="container">
      <div className="jumpotron">
        <h1 className="display-1  pt-5 "> Mission control</h1>
        <hr class="my-4"></hr>
      </div>

      <div className="row">
        <div class="col">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </div>
        <div className="col">
          <img className="img-fluid" src={background} alt="linen"></img>
        </div>
      </div>

      <div className="row">
        <img className="img-fluid" src={background} alt="linen"></img>
      </div>
    </div>
  );
}

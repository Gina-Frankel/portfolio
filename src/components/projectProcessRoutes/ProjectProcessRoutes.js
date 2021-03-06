import React, { Component } from "react";
import projectList from "../../projects";
import { ProjectProcessContainer } from "../index";
import { BrowserRouter as Route, Switch } from "react-router-dom";

export class ProjectProcessRoutes extends Component {
  render() {
    const newRoute = projectList.map((project, index) => {
      const name = project.name;

      // const slug = `${name.replace(/\s/g, "-")}`;
      const url = `/${name}`;

      return (
        <Route exact path={url}>
          <ProjectProcessContainer project={project} />
        </Route>
      );
    });

    return <Switch>{newRoute}</Switch>;
  }
}

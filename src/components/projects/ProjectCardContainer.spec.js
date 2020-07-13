import React from "react";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import Projects from "./ProjectCardContainer";
import ProjectCard from "./ProjectCard";

it("renders correctly", () => {
  const wrapper = shallow(<Projects />);

  expect(wrapper).toHaveLength(1);
});

it("renders Projects", () => {
  const wrapper = shallow(<Projects />);

  expect(wrapper.text()).toContain("Projects");
});

// it("renders a Link to the repoLink", () => {
//     const wrapper = shallow(<Projects  />)
//     const link = (
//       <a href="https://github.com/Gina-Frankel/CV">
//         GitHub Repo
//       </a>
//     )
//     console.dir(wrapper)
//     expect(wrapper.text()).toContain(link)
//     })

it("renders the name of the project", () => {
  const wrapper = shallow(<Projects />);
  expect(wrapper.text()).toContain("Mission Ctrl");
});

it("renders a ProjectCard", () => {
  const wrapper = shallow(<Projects />);
  const projectCard = <ProjectCard />;

  expect(wrapper.containsMatchingElement(projectCard)).toEqual(true);
});

//expect(wrapper.containsMatchingElement(statueMenuItem)).toEqual(true);

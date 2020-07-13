import React from "react";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import { ProjectCardContainer } from "../index";
import { ProjectCard } from "../index";

it("renders correctly", () => {
  const wrapper = shallow(<ProjectCardContainer />);

  expect(wrapper).toHaveLength(1);
});

it("renders Projects", () => {
  const wrapper = shallow(<ProjectCardContainer />);

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

it("renders a ProjectCard", () => {
  const wrapper = shallow(<ProjectCardContainer />);
  const projectCard = <ProjectCard />;

  expect(wrapper.containsMatchingElement(projectCard)).toEqual(true);
});

//expect(wrapper.containsMatchingElement(statueMenuItem)).toEqual(true);

import React from "react";
import { shallow } from "enzyme";

import { ProjectCardContainer } from "../index";
import { ProjectCard } from "../index";

it("renders correctly", () => {
  const wrapper = shallow(<ProjectCardContainer />);

  expect(wrapper).toHaveLength(1);
});

it("renders a ProjectCard", () => {
  const wrapper = shallow(<ProjectCardContainer />);
  const projectCard = <ProjectCard />;

  expect(wrapper.containsMatchingElement(projectCard)).toEqual(true);
});

import React from "react";
import { shallow } from "enzyme";
import { ProjectCard } from "./ProjectCard";
import { ProjectCardItem } from "../index";
import ProjectList from "../../projects";

it("renders correctly", () => {
  const wrapper = shallow(<ProjectCard />);
  expect(wrapper).toHaveLength(1);
});

it("renders a ProjectCardItem component", () => {
  const wrapper = shallow(<ProjectCard />);

  const projectItem = ProjectList[0];

  const mockProjectCardItem = <ProjectCardItem key={0} value={projectItem} />;
  expect(wrapper.containsMatchingElement(mockProjectCardItem)).toEqual(true);
});

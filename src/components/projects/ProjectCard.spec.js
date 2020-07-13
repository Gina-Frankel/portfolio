import React from "react";
import { shallow } from "enzyme";
import ProjectCard from "./ProjectCard";

it("renders correctly", () => {
  const wrapper = shallow(<ProjectCard />);
  expect(wrapper).toHaveLength(1);
});

it("renders the name of the project", () => {
  const wrapper = shallow(<ProjectCard />);
  expect(wrapper.text()).toContain("Mission Ctrl");
});

it("renders the technologies of the project", () => {
  const wrapper = shallow(<ProjectCard />);
  expect(wrapper.text()).toContain("Ruby");
});

it("renders a summary of the project", () => {
  const wrapper = shallow(<ProjectCard />);
  expect(wrapper.text()).toContain(
    "A Command Line Interface program imitating a bank account"
  );
});

it("renders a Link to the repoLink", () => {
  const wrapper = shallow(<ProjectCard />);
  const link = (
    <a href="https://github.com/tommyrharper/mission-ctrl">GitHub Repo</a>
  );
  expect(wrapper.containsMatchingElement(link)).toEqual(true);
});

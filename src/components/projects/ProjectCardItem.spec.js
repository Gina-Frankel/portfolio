import React from "react";
import { shallow } from "enzyme";
import { ProjectCardItem } from "../index";

const props = {
  name: "Test Project",
  technologies: "Test Technology",
  summary: "Test Summary",
};

it("renders correctly", () => {
  const wrapper = shallow(<ProjectCardItem value={props} />);
  expect(wrapper).toHaveLength(1);
});

it("renders the name of the project", () => {
  const wrapper = shallow(<ProjectCardItem value={props} />);
  expect(wrapper.text()).toContain("Test Project");
});

it("renders the technologies of the project", () => {
  const wrapper = shallow(<ProjectCardItem value={props} />);
  expect(wrapper.text()).toContain("Test Technology");
});

it("renders a summary of the project", () => {
  const wrapper = shallow(<ProjectCardItem value={props} />);
  expect(wrapper.text()).toContain("Test Summary");
});

// it("renders a summary of the project", () => {
//   const wrapper = shallow(<ProjectCard />);
//   expect(wrapper.text()).toContain(
//     "A Command Line Interface program imitating a bank account"
//   );
// });

// it("renders a Link to the repoLink", () => {
//   const wrapper = shallow(<ProjectCard />);
//   const link = (
//     <a href="https://github.com/tommyrharper/mission-ctrl">GitHub Repo</a>
//   );
//   expect(wrapper.containsMatchingElement(link)).toEqual(true);
// });

import React from "react";
import { shallow } from "enzyme";
import { ProjectCardItem } from "../index";

const props = {
  name: "Test Project",
};

it("renders correctly", () => {
  const wrapper = shallow(<ProjectCardItem value={props} />);
  expect(wrapper).toHaveLength(1);
});

it("renders the name of the project", () => {
  const wrapper = shallow(<ProjectCardItem value={props} />);
  expect(wrapper.text()).toContain("Test Project");
});

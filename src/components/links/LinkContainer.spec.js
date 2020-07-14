import React from "react";
import { shallow } from "enzyme";
import { LinkContainer } from "../index";

it("renders correctly", () => {
  const wrapper = shallow(<LinkContainer />);
  expect(wrapper).toHaveLength(1);
});

it("renders with 'Github' Link", () => {
  const wrapper = shallow(<LinkContainer />);
  expect(wrapper.text()).toContain("GitHub");
});

it("renders a Link to gitHub repo", () => {
  const wrapper = shallow(<LinkContainer />);
  const link = <a href="https://github.com/Gina-Frankel">GitHub</a>;
  expect(wrapper.containsMatchingElement(link)).toEqual(true);
});

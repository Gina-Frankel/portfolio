import React from "react";
import { shallow } from "enzyme";
import { Footer } from "../index";

it("renders correctly", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toHaveLength(1);
});

it("renders with 'Github' Link", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.text()).toContain("GitHub");
});

it("renders a Link to gitHub repo", () => {
  const wrapper = shallow(<Footer />);
  const link = <a href="https://github.com/Gina-Frankel">GitHub</a>;
  expect(wrapper.containsMatchingElement(link)).toEqual(true);
});

it("renders a Link to LinkedIn", () => {
  const wrapper = shallow(<Footer />);
  const link = <a href="https://www.linkedin.com/in/gina-frankel">LinkedIn</a>;
  expect(wrapper.containsMatchingElement(link)).toEqual(true);
});

it("renders a Link to Github CV", () => {
  const wrapper = shallow(<Footer />);
  const link = <a href="https://github.com/Gina-Frankel/CV">Github CV</a>;

  expect(wrapper.containsMatchingElement(link)).toEqual(true);
});

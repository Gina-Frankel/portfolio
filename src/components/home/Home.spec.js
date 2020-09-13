import React from "react";
import { shallow } from "enzyme";
import { About } from "../index";

it("renders correctly", () => {
  const wrapper = shallow(<About />);
  expect(wrapper).toHaveLength(1);
});

it("renders a description about developer", () => {
  const wrapper = shallow(<About />);
  expect(wrapper.text()).toContain("Gina Frankel");
});

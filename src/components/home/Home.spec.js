import React from "react";
import { shallow } from "enzyme";
import { Home } from "../index";

it("renders correctly", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toHaveLength(1);
});

it("renders a description about developer", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.text()).toContain("Gina Frankel");
});

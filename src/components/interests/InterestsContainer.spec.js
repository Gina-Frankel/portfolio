import React from "react";
import { shallow } from "enzyme";
import { InterestsContainer } from "../index";

it("renders correctly", () => {
  const wrapper = shallow(<InterestsContainer />);
  expect(wrapper).toHaveLength(1);
});

it("renders first interest", () => {
  const wrapper = shallow(<InterestsContainer />);
  expect(wrapper.text()).toContain("Art");
});

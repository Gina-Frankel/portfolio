import React from "react";
import { shallow } from "enzyme";
import { About } from "../index";

it("renders correctly", () => {
  const wrapper = shallow(<About />);
  expect(wrapper).toHaveLength(1);
});

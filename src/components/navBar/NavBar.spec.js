import React from "react";
import { shallow } from "enzyme";
import { NavBar } from "../index";

it("renders correctly", () => {
  const wrapper = shallow(<NavBar />);
  expect(wrapper).toHaveLength(1);
});

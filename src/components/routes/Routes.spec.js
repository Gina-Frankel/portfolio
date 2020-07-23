import React from "react";
import { shallow } from "enzyme";
import { Routes } from "../index";

it("renders correctly", () => {
  const wrapper = shallow(<Routes />);
  expect(wrapper).toHaveLength(1);
});

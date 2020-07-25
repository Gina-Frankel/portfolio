import React from "react";
import { shallow } from "enzyme";
import { AboutLink } from "../index";

it("renders correctly", () => {
  const wrapper = shallow(<AboutLink />);
  expect(wrapper).toHaveLength(1);
});

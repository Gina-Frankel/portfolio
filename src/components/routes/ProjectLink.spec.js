import React from "react";
import { shallow } from "enzyme";
import { ProjectLink } from "../index";

it("renders correctly", () => {
  const wrapper = shallow(<ProjectLink />);
  expect(wrapper).toHaveLength(1);
});

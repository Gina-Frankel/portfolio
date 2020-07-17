import React from "react";
import { shallow } from "enzyme";
import { ProjectCardItem } from "../index";

it("renders correctly", () => {
  const wrapper = shallow(<ProjectCardItem />);
  expect(wrapper).toHaveLength(1);
});

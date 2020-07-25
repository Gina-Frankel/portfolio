import React from "react";
import { shallow } from "enzyme";
import { FooterLinks } from "../index";

it("renders correctly", () => {
  const wrapper = shallow(<FooterLinks />);
  expect(wrapper).toHaveLength(1);
});

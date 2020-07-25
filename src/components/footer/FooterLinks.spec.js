import React from "react";
import { shallow } from "enzyme";
import { FooterLinks } from "../index";

const props = {
  name: "Test contact",
  link: "www.test.com",
};

it("renders correctly", () => {
  const wrapper = shallow(<FooterLinks value={props} />);
  expect(wrapper).toHaveLength(1);
});

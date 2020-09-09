import React from "react";
import { shallow } from "enzyme";
import { ContactLinkItem } from "../index";

const props = {
  name: "Test contact",
  link: "www.test.com",
};

it("renders correctly", () => {
  const wrapper = shallow(<ContactLinkItem value={props} />);
  expect(wrapper).toHaveLength(1);
});

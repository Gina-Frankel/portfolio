import React from "react";
import { shallow } from "enzyme";
import { LinkContainer } from "./LinkContainer";

it("renders correctly", () => {
  const wrapper = shallow(<LinkContainer />);
  expect(wrapper).toHaveLength(1);
});

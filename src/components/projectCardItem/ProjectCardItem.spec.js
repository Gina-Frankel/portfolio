import React from "react";
import { shallow } from "enzyme";
import { ProjectCardItem } from "../index";
import { fireEvent, render } from "@testing-library/react";

const props = {
  name: "Test Project",
  technologies: "Test Technology",
  summary: "Test Summary",
  repolink: "www.test.com",
  img: "img.png",
};

it("renders correctly", () => {
  const wrapper = shallow(<ProjectCardItem value={props} />);
  expect(wrapper).toHaveLength(1);
});

it("renders the name of the project", () => {
  const wrapper = shallow(<ProjectCardItem value={props} />);
  expect(wrapper.text()).toContain("Test Project");
});

it("renders the technologies of the project", () => {
  const wrapper = shallow(<ProjectCardItem value={props} />);
  expect(wrapper.text()).toContain("Test Technology");
});

it("renders a summary of the project", () => {
  const wrapper = shallow(<ProjectCardItem value={props} />);
  expect(wrapper.text()).toContain("Test Summary");
});

it("it should navigate to github repo when link is clicked", () => {
  const { getByText } = render(<a href="www.test.com">Github Repo</a>);
  const link = getByText("Github Repo");
  fireEvent.click(link);
  expect(getByText("Github Repo").closest("a")).toHaveAttribute(
    "href",
    "www.test.com"
  );
});

xit("renders a screenshot of project", () => {
  const wrapper = shallow(<ProjectCardItem value={props} />);
  expect(wrapper.text()).toContain("img.png");
});

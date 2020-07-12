import React from 'react'
import {shallow} from "enzyme"
import ProjectCard from "./ProjectCard"

it("renders correctly", () => {
    const wrapper = shallow (<ProjectCard/>)
    expect(wrapper).toHaveLength(1)
})
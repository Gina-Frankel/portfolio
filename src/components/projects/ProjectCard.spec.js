import React from 'react'
import {shallow} from "enzyme"
import ProjectCard from "./ProjectCard"

it("renders correctly", () => {
    const wrapper = shallow (<ProjectCard/>)
    expect(wrapper).toHaveLength(1)
})

it("renders the name of the project",()=> {
    const wrapper = shallow(<ProjectCard />)
    expect(wrapper.text()).toContain('Mission Ctrl')
})
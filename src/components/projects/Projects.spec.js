import React from 'react'
import {shallow} from "enzyme"
import Projects from "./Projects"
import React from "react";


it("renders correctly", () => {

    const wrapper = shallow(<Projects/>)

    expect(wrapper).toHaveLength(1)
});

it("renders Projects", () => {
    const wrapper = shallow (<Projects/>)

    expect(wrapper.text()).toContain('Projects')
})
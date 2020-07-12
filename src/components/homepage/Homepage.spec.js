import React from 'react'
import {shallow} from "enzyme"
import HomePage from "./Homepage"

it("renders correctly", () => {

    const wrapper = shallow(<HomePage/>)

    expect(wrapper).toHaveLength(1)
});
it("renders correctly", () => {

    const wrapper = shallow(<HomePage/>)

    expect(wrapper.text()).toContain('HomePage')
});

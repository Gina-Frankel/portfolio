import React from 'react'
import {shallow} from "enzyme"
import Portfolio from "./Portfolio"

it("renders correctly", () => {

    const wrapper = shallow(<Portfolio/>)

    expect(wrapper).toHaveLength(1)
});
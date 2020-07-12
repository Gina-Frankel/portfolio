import React from 'react'
import {shallow} from "enzyme"
import { render } from '@testing-library/react';
import Projects from "./Projects"

it("renders correctly", () => {

    const wrapper = shallow(<Projects/>)

    expect(wrapper).toHaveLength(1)
});

it("renders Projects", () => {
    const wrapper = shallow (<Projects/>)

    expect(wrapper.text()).toContain('Projects')
})

// it("renders a Link to the repoLink", () => {
//     const wrapper = shallow(<Projects  />)
//     const link = (
//       <a href="https://github.com/Gina-Frankel/CV">
//         GitHub Repo
//       </a>
//     )
//     console.dir(wrapper)
//     expect(wrapper.text()).toContain(link)
//     })
    it("renders a Link to the repoLink", () => {
        const wrapper = shallow(<Projects  />)
        const link = (
          <a href="https://github.com/tommyrharper/mission-ctrl">
            GitHub Repo
          </a>
        )
        expect(wrapper.containsMatchingElement(link)).toEqual(true)
      })

      it("renders the name of the project",()=> {
          const wrapper = shallow(<Projects />)
          expect(wrapper.text()).toContain('Mission Ctrl')
      })
import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
    return (

        <div>
            Projects
            <ProjectCard/>
        
            <h3>Mission Ctrl</h3>
            <a
            className ="Project-Link"
            href= "https://github.com/tommyrharper/mission-ctrl"

            >GitHub Repo

            </a>
        </div>
    )
}

export default Projects;
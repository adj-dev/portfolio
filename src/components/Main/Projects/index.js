import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import Project from './Project'
import projects from '../../../assets/data'

import './style.css'

const Projects = ({ scrollToExperience }) => {

  return (
    <div id='projects'>
      {projects.map(project => <Project {...project} key={project.id} />)}
      <div className="scroll-btn experience" onClick={() => scrollToExperience()}>
        experience
        <FaCaretDown />
      </div>
    </div>
  )
}

export default Projects

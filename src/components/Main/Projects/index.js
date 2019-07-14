import React from 'react'
import Project from './Project'
import projects from '../../../assets/data'

import './style.css'

const Projects = () => {

  return (
    <div id='projects'>
      {projects.map(project => <Project {...project} key={project.id} />)}
    </div>
  )
}

export default Projects

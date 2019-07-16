import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import Project from './Project'
import { projects } from '../../../assets/data'
import './style.css'

const Portfolio = ({ scrollToTarget }) => {
  return (
    <div id='portfolio'>
      {projects.map(project => <Project {...project} key={project.id} />)}
      <div className="scroll-btn portfolio" id='contact-btn' onClick={() => scrollToTarget('contact')}>
        contact
        <FaCaretDown />
      </div>
    </div>
  )
}

export default Portfolio

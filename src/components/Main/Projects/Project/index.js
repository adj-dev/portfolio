import React from 'react'
import { FaGithub, FaGithubAlt } from 'react-icons/fa'
import { DiHeroku } from 'react-icons/di'

import './style.css'

const Project = ({ title, brief, synopsis, image, repoLink, deployment }) => {
  return (
    <div className='container'>
      <div className='project-title'>
        <h1>{title}</h1>
      </div>
      <div className='project-brief'>
        <p>{brief}</p>
      </div>
      <div className="synopsis">
        <p>{synopsis}</p>
      </div>
      <div className='row project'>
        <div className='project-img'>
          <img src={image} alt='' />
        </div>
        <div className='project-links'>
          <div className="project-links-wrapper">
            <div className="link-item">
              <a href={repoLink} target='_blank' rel='noopener noreferrer'>
                <FaGithub />
                <span>repo</span>
              </a>
            </div>
            {
              deployment ?
                <div className="link-item">
                  <a href={deployment.link} target='_blank' rel='noopener noreferrer'>
                    {deployment.type === 'heroku' ? <DiHeroku /> : <FaGithubAlt />}
                    <span>deployment</span>
                  </a>
                </div>
                :
                null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project

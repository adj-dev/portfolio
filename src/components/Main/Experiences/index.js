import React from 'react'
import Experience from './Experience'
import { experiences } from '../../../assets/data'
import './style.css'

const Experiences = () => {
  return (
    <div id='experience'>
      <div className="message">
        Here is a short list of my professional experience.
      </div>
      {experiences.map(data => <Experience {...data} key={data.id} />)}
    </div>
  )
}

export default Experiences

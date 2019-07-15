import React from 'react'
import Experience from './Experience'
import { experiences } from '../../../assets/data'
import './style.css'

const Experiences = () => {
  return (
    <div id='experience'>
      {experiences.map(data => <Experience {...data} key={data.id} />)}
    </div>
  )
}

export default Experiences

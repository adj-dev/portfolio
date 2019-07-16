import React, { useState } from 'react'
import { IoMdRemove } from 'react-icons/io'
import './style.css'

const Experience = ({ company, location, role, duration, content }) => {

  const [hide, setHide] = useState(window.innerWidth <= 960 ? true : false)

  const viewportExceedsMinWidth = () => {
    if (window.innerWidth <= 960) {
      return setHide(true)
    }
    setHide(false)
  }

  window.addEventListener('resize', viewportExceedsMinWidth)

  return (
    <div className='container'>
      <div className='experience-header'>
        <div className='company'>{company}{hide ? null : ','}</div>
        <div className='location'>{location}</div>
        {hide ? null : <IoMdRemove />}
        <div className='role'>{role}</div>
      </div>
      <div className='duration'>{duration}</div>
      <div className='experience-content'>{content}</div>
    </div>
  )
}

export default Experience

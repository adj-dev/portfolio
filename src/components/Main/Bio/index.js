import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import './style.css'

const Bio = ({ scrollToTarget }) => {
  return (
    <div id='bio'>
      <div className="container">
        <p className='larger'>
          My name is Andrew Johnson and I am a software developer based out of Minneapolis.
          Proficient in HTML, CSS, Javascript, React, and NodeJS - and perpetually improving
          and increasing my skillset.
      </p>
        <p className='larger'>
          In my free time I enjoy to pluck the strings of a guitar, sing a tune, or go
          sailing when the weather is permitting. With an affinity for adventure I am
          always looking for new opportunities to grow and challenges to explore.
      </p>
      </div>
      <div className="scroll-btn bio" id='portfolio-btn' onClick={() => scrollToTarget('portfolio')}>
        portfolio
        <FaCaretDown />
      </div>
    </div>
  )
}

export default Bio

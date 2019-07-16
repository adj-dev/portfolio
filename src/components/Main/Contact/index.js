import React from 'react'
import { FiAtSign } from 'react-icons/fi'
import { FaCaretUp } from 'react-icons/fa'
import './style.css'

const Contact = ({ scrollToTarget }) => {
  return (
    <div id='contact'>
      <div className="container">
        <div className="message">
          <p className='larger'>
            I am currently looking for career opportunities!
            If you are searching for an addition to your development team I
            would love to hear from you!
          </p>
        </div>
        <div className="contact-btn">
          <a href='mailto:andrew.johnson2073@gmail.com'>
            <FiAtSign />
          </a>
        </div>
      </div>
      <div className="scroll-btn contact" onClick={() => scrollToTarget('splash')}>
        <FaCaretUp />
        top
      </div>
    </div>
  )
}

export default Contact

import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import './style.css'

const Splash = ({ scrollToTarget }) => {

  return (
    <div id='splash'>
      <div className='splash-img'>
        <img src={require('../../../assets/images/headshot.png')} alt="" />
      </div>
      <h1>ANDREW JOHNSON</h1>
      <div className="splash-brief">
        <h2>a web developer's portfolio</h2>
      </div>
      <div className="scroll-btn splash" id='bio-btn' onClick={() => scrollToTarget('bio')}>
        bio
        <FaCaretDown />
      </div>
    </div>
  )
}

export default Splash

import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import './style.css'

const Splash = () => {

  const scrollToProjects = () => {
    let to = document.getElementById("projects").offsetTop;
    window.scrollTo({
      top: to,
      behavior: "smooth"
    })
  }

  return (
    <div id='splash'>
      <div className='splash-img'>
        <img src={require('../../../assets/images/headshot.png')} alt="" />
      </div>
      <h1>ANDREW JOHNSON</h1>
      <div className="splash-brief">
        <h2>a web developer's portfolio</h2>
      </div>
      <div className="scroll-btn projects" onClick={scrollToProjects}>
        projects
        <FaCaretDown />
      </div>
    </div>
  )
}

export default Splash

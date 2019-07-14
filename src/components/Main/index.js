import React, { useState } from 'react'
import Splash from './Splash'
import Projects from './Projects'
import Experience from './Experience'
import './style.css'

const Main = () => {

  const [visible, setVisible] = useState(false)

  const scrollToExperience = async () => {
    await setVisible(true)

    let to = document.getElementById('experience').offsetTop;
    window.scrollTo({
      top: to,
      behavior: "smooth"
    })
  }

  return (
    <>
      <Splash />
      <Projects scrollToExperience={scrollToExperience} />
      {visible ? <Experience /> : null}
    </>
  )
}

export default Main

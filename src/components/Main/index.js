import React, { useState } from 'react'
import Splash from './Splash'
import Projects from './Projects'
import Experiences from './Experiences'
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
      {visible ? <Experiences /> : null}
    </>
  )
}

export default Main

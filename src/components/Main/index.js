import React, { useState } from 'react'
import Splash from './Splash'
import Bio from './Bio'
import Portfolio from './Portfolio'
import Contact from './Contact'
import './style.css'

const Main = () => {
  const [showBio, setShowBio] = useState(false)
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [showContact, setShowContact] = useState(false)

  const scrollToTarget = async target => {
    if (target === 'bio') {
      await setShowBio(true)
      document.getElementById(`${target}-btn`).setAttribute('style', 'visibility: hidden');
    }

    if (target === 'portfolio') {
      await setShowPortfolio(true)
      document.getElementById(`${target}-btn`).setAttribute('style', 'visibility: hidden');
    }

    if (target === 'contact') {
      await setShowContact(true)
      document.getElementById(`${target}-btn`).setAttribute('style', 'visibility: hidden');
    }

    let to = document.getElementById(target).offsetTop

    window.scrollTo({
      top: to,
      behavior: "smooth"
    })
  }

  return (
    <>
      <Splash scrollToTarget={scrollToTarget} />
      {showBio ? <Bio scrollToTarget={scrollToTarget} /> : null}
      {showPortfolio ? <Portfolio scrollToTarget={scrollToTarget} /> : null}
      {showContact ? <Contact scrollToTarget={scrollToTarget} /> : null}
    </>
  )
}

export default Main

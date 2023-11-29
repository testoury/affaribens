import React from 'react'
import NavBar from '../assets/components/NavBar'
import Footer from '../assets/components/Footer'
import ProjectContent from '../assets/components/ProjectContent'
import AboutContent from '../assets/components/AboutContent'

export default function About() {
  return (
    <div>
      <NavBar/>
      <ProjectContent heading="About" text="Here every thing you need to know about me"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

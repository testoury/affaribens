import React from 'react'
import NavBar from '../assets/components/NavBar'
import ProjectContent from "../assets/components/ProjectContent"
import Footer from '../assets/components/Footer'
import Work from "../assets/components/Work"
export default function Projects() {
  return (
    <div>
      <NavBar/>
      <ProjectContent heading="PROJECTS" text="This is some of my Projects"/>
      <Work/>
      <Footer/>
    </div>
  )
}

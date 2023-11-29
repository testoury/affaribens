import React from 'react'
import "./ProjectContentStyle.css"
import { Component } from 'react'

export default class ProjectContent extends Component {
  render(){
  return (
    <div className='project-img'>
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
    </div>
  )
}
}
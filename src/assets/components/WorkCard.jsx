import "./WorkCardStyle.css"
import React from 'react'
export default function WorkCard(props) {
  return (
    <div className="card">
                <img src={props.imgsrc} alt="imageq" />
            </div>
  )
}

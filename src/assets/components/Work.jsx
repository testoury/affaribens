import WorkCard from "./WorkCard"
import "./WorkCardStyle.css"
import React from 'react'
import WorkData from "./WorkData"

export default function Work() {
  return (
    <div className="workcard">
        <div className="card-container">
            {WorkData.map((val, ind)=>{
              return(
                <WorkCard 
                key={ind} 
              imgsrc={val.imgsrc}
              />
              )
            })}
        </div>
    </div>
  )
}

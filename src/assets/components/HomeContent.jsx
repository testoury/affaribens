import React from 'react'
import sistematetto from "../pics/sistematetto.jpg"
import { Link } from 'react-router-dom'
import  "./HomeContentStyle.css"

export default function HomeContent() {
  return (
    <div className='homec'>
        <div className="mask">
            <img className='sistematetto' src={sistematetto} alt="tetto" />
        </div>
        <div className="content">
        <p>Benvenuti a Affari BENS. </p><br /><hr />
          <h1>Sistema Tetto</h1>
          <div>
            <Link to="/project" className='btn'>
              Projects
            </Link>
            <Link to="/about" className='btn btn-light'>
              About
            </Link>
          </div>
        </div>
    </div>
  )
}

import React from 'react'
import "./FooterStyle.CSS"
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="left"> 
        <div className="location">
           <FaHome size={20} style={{color:"white" , marginRight:"2rem"}} />
           <div>
            <p>26015 Soresina (CR)</p>
            <p>Italy</p>
           </div>
        </div>
        <div className="phone">
        <h4><FaPhone size={20} style={{color:"white" , marginRight:"2rem"}} />
        0039-324-787-6042</h4>
        </div>
        <div className="email">
        <h4><FaMailBulk size={20} style={{color:"white" , marginRight:"2rem"}} />slimbensli23@gmail.com
        </h4>
        </div>
        </div>
        <div className="right">
        <h4>About the company</h4>
        <p>"This Website made by <span>Testouri Hichem</span> for <span>Affari Bens.</span> Company which deals with everything related to Roofing System"-ENG</p><hr/>
        <p>"Questo Sito Web realizzato da <span>Testouri Hichem</span> per la società <span>Affari Bens.</span> che si occupa di tutto ciò che riguarda il Sistema Di Tetto" - IT</p>
        <div className="social">
        <FaFacebook size={20} style={{color:"white" , marginRight:"1rem"}} />
        <FaLinkedin size={20} style={{color:"white" , marginRight:"1rem"}} />
        <FaInstagram size={20} style={{color:"white" , marginRight:"1rem"}} />
        </div>
        </div>
      </div>
    </div>
  )
}

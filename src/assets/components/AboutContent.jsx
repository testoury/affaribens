import React from 'react'
import "./AboutContentStyle.css"
import myimg from "../pics/mypic.jpg"
export default function AboutContent() {
  return (
    <div className='about'>
        <div className="left">
            <img  src={myimg} alt="mypic" />
        </div>
        <div className="right">
         <h2>Slim Ben Slimane </h2>   
         <h4>"Muratore"</h4>
         <p>Operaio edile con oltre vent'anni di esperienza nel settore edile. Abile nel dosaggio e nella miscelazione di diversi conglomerati, nell'utilizzo e nella manutenzione di macchinari e attrezzature da cantiere, e nella preparazione e organizzazione del cantiere. Conoscenza approfondita dei codici e regolamenti edilizi, e delle pratiche di sicurezza sul lavoro.
specializzato in lattoneria e copertura in generale .</p>
        </div>

    </div>
  )
}


import "./AboutContentStyle.css"
import myimg from "../pics/mypic1.jpg"
export default function AboutContent() {
  return (
<div className='about '>
        <img src={myimg} alt="mypic" className="mypic , card" />
        <div className="right">
         <h2>Slim Ben Slimane </h2>   
         <h4>-Lattoniere-</h4>
         <p>Operaio edile con oltre vent’anni di esperienza nel settore delle costruzioni. 
          sperto nel dosaggio e nella miscelazione di diversi tipi di conglomerati, 
          nell’utilizzo e nella manutenzione di macchinari e attrezzature da cantiere, 
          nonché nella preparazione e organizzazione delle attività in cantiere. Possiede un’ottima 
          conoscenza delle normative edilizie e delle procedure di sicurezza sul lavoro. Specializzato in lavori di lattoneria e 
          nelle coperture edili in generale, con particolare attenzione alla qualità delle lavorazioni e al rispetto degli standard 
          professionali.</p>
        </div>
        <div className="skills">
        <h4>Competenze</h4>
  <ul>
    <li>Preparazione e organizzazione del cantiere</li>
    <li>Dosaggio e miscelazione di conglomerati cementizi</li>
    <li>Utilizzo e manutenzione di macchinari e attrezzature da cantiere</li>
    <li>Lavori di lattoneria (grondaie, pluviali, scossaline)</li>
    <li>Installazione e manutenzione di coperture e tetti</li>
    <li>Conoscenza dei materiali edili e delle tecniche di costruzione</li>
    <li>Lettura base di disegni tecnici e progetti</li>
    <li>Montaggio e smontaggio di ponteggi</li>
    <li>Rispetto delle norme di sicurezza sul lavoro</li>
    <li>Lavoro in squadra e coordinamento con altri operai</li>
    <li>Buona resistenza fisica e capacità di lavorare in quota</li>
  </ul>
  </div>
    </div>
  )
}

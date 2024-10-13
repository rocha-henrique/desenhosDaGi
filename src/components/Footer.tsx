import React from "react";
import email from '../assets/images/email.png'
import github from '../assets/images/github-padrao.png'
import instagram from '../assets/images/instagram.png'
import '../style/Footer.css'

const Footer: React.FC = () => {
  
  return (
    <div className="footer">
      {/* <div className="container-gianne">
        <div className="container-icones">
        <a href="https://www.giannebianca10@gmail.com" target="_blank" rel="noopener noreferrer">
          <img className="icones-footer" src={email} alt="" />
        </a>
        <a href="https://www.instagram.com/desenhosdagi_/" target="_blank" rel="noopener noreferrer">
          <img className="icones-footer" src={ instagram } alt="" />
        </a>
        </div>
      </div> */}

      <div className="container-henrique">
        <p> Criado e desenvoldido por Henrique rocha</p>
        <a href="https://github.com/rocha-henrique" target="_blank" rel="noopener noreferrer">
          <img className="icones-footer" src={ github } alt="" />
        </a>
      </div>    
    </div>
  )
}

export default Footer;

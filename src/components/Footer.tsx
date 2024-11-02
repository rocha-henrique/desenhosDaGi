import React from "react";
import github from '../assets/images/github-padrao.png'
import '../style/Footer.css'

const Footer: React.FC = () => {
  
  return (
    <div className="footer">
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

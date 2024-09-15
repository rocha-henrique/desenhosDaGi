import React from "react";
import email from '../assets/images/email.png'
import '../style/Footer.css'

const Footer: React.FC = () => {
  
  return (
    <div className="footer">
      <img className="email" src={email} alt="" />
      <p>
        giannebianca10@gmail.com
      </p>
    </div>
  )
}

export default Footer;

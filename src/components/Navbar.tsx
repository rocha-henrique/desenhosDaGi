import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import instagram from '../assets/images/instagram.png'
import menu from '../assets/images/menu.png'
import '../style/Navbar.css'

const Navbar: React.FC = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [menuCentralizado, setMenuCentralizado] = useState(false);
  
  const handleMenuClick = () => {
    setMenuAberto(!menuAberto);
    setMenuCentralizado(true);
  };
  
  const handleMenuBlur = () => {
    setMenuCentralizado(false);
  };
  
  const display = menuAberto ? 'block' : 'none';
  
  return (
    <div className="navbar">
      <a href="https://www.instagram.com/desenhosdagi_/" target="_blank" rel="noopener noreferrer">
        <img className="instagram" src={instagram} alt="" />
      </a>
      <Link to="/desenhosDaGi">
        <h2 className='titulo'>
          Gianne Bianca
        </h2>
      </Link>

      <div className="menu-hamburguer" onClick={handleMenuClick}>
        <img src={menu} alt="menu" className='menu-icon'/>
      </div>

      {menuAberto && (
        <div
          style={{ display }}
          className={`container-links ${menuCentralizado ? 'centralizado' : ''}`}
          onClick={handleMenuClick}
          onBlur={handleMenuBlur}
        >
          <Link to="/desenhosDaGi">
            <h4 className='texto-link'>
              Inicio
            </h4>
          </Link>
          <Link to="/sobremim">
            <h4 className='texto-link'>
              Sobre mim
            </h4>
          </Link>
          <Link to="/informaçoes">
            <h4 className='texto-link'>
              Informaçoes
            </h4>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar;
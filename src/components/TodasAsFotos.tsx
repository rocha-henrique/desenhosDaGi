import React, { useState } from 'react';
import { fotos } from '../assets/fotos';
import fotoPrincipal from "../assets/images/foto-principal.jpg";
import { useNavigate } from 'react-router-dom'; // Importar o hook useNavigate
import compartilhar from '../assets/images/compartilhar.png';
import '../style/TodasAsFotos.css';
import '../style/Home.css';

const TodasAsFotos: React.FC = () => {
  const [fotosState] = useState(fotos);
  const navigate = useNavigate(); // Usar o hook useNavigate para navegação programática

  const handleShare = () => {
    const sharedUrl = `${window.location.origin}/desenhosDaGi/`;
    console.log('URL compartilhada:', sharedUrl);
  
    if (navigator.share) {
      navigator.share({
        title: 'Veja esta foto',
        text: 'Confira esta foto incrível!',
        url: sharedUrl
      }).catch((error) => console.log('Erro ao compartilhar:', error));
    } else {
      const whatsappUrl = `https://api.whatsapp.com/send?text=Confira esta foto incrível! ${sharedUrl}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  // Função para lidar com o clique no link e redirecionar para a página principal
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevenir o comportamento padrão do link
    navigate('/desenhosDaGi/'); // Navegar para a página principal
  };

  return (
    <div className='container-todasAsFotos'>
      <img className='img-principal' src={fotoPrincipal} alt="" />
      <div className="containerIMG">
        <div className="imagensPrimeiroLote">
          <h4 className="mensagem-explicacao">Todas as minhas imagens em uma galeria estendida.</h4>
          {fotosState.slice(9, 18).map((foto, index) => (
            <div key={index} className='container-botao'>
              <a href={`/foto/${foto.id}`} onClick={handleLinkClick} key={index}>
                <img className="img" src={foto.src} alt={foto.alt} />
              </a>
              <button 
                className='botao-compartilhar' 
                onClick={() => handleShare()}
              >
                <div className="compartilhar">
                  <img className="img-compartilhar" src={compartilhar} alt="" />
                  <p>Enviar</p>
                </div>
              </button>
            </div>
          ))}
        </div>
        <div className="imagensSegundoLote">
          {fotosState.slice(0, 9).map((foto, index) => (
            <div key={index} className='container-botao'>
              <a href={`/foto/${foto.id}`} onClick={handleLinkClick} key={index}>
                <img className="img" src={foto.src} alt={foto.alt} />
              </a>
              <button 
                className='botao-compartilhar' 
                onClick={() => handleShare()}
              >
                <div className="compartilhar">
                  <img className="img-compartilhar" src={compartilhar} alt="" />
                  <p>Enviar</p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodasAsFotos;
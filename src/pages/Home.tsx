import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TodasAsFotos from "../components/TodasAsFotos";
import { fotos } from '../assets/fotos';
import '../style/TodasAsFotos.css';

interface Foto {
  id: number;
  src: string;
  alt: string;
}

function Home() {
  const [fotoCompartilhada, setFotoCompartilhada] = useState<Foto | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Extrair o parâmetro 'foto' da query string
    const queryParams = new URLSearchParams(location.search);
    const fotoId = queryParams.get('foto');
    
    if (fotoId) {
      // Encontrar a foto com o ID correspondente
      const fotoEncontrada = fotos.find(foto => foto.id === parseInt(fotoId));
      setFotoCompartilhada(fotoEncontrada || null);
    }
  }, [location.search]);

  return (
    <div>
      <Navbar />
      <div className="main">
        <header className="title">
          <h1 className="sub-titulo">Bem vindo ao meu portfólio</h1>
        </header>
        
        {fotoCompartilhada ? (
          // Se uma foto compartilhada for encontrada, exibe-a
          <div className="foto-compartilhada">
            <h2>Foto Compartilhada</h2>
            <img src={fotoCompartilhada.src} alt={fotoCompartilhada.alt} />
          </div>
        ) : (
          // Se não houver foto compartilhada, exibe todas as fotos
          <TodasAsFotos />
        )}
        
      </div>
      <Footer />
    </div>
  );
}

export default Home;

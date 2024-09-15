import { useParams } from 'react-router-dom';
import { fotos } from '../assets/fotos';
import '../style/FotoAmpliada.css';
import Navbar from '../components/Navbar';

function FotoAmpliada() {
  const { id } = useParams();
  const foto = fotos.find((foto) => foto.id === Number(id));

  if (id === undefined) {
    return <div>ID não encontrado</div>;
  }
  if (foto === undefined) {
    return <div>Foto não encontrada</div>;
  }
  return (
    <div>
      <Navbar />
      <div className="container-FotoAmpliada">
      <img className="img-ampliada" src={foto.src} alt="Imagem ampliada" onError={() => console.error('Erro ao carregar imagem')} />
      </div>
    </div>
  );
}

export default FotoAmpliada;
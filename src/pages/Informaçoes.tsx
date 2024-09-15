import Navbar from "../components/Navbar";
import precoPorPessoa from '../assets/images/precoPorPessoa.jpg'
import animaisComPelos from '../assets/images/animaisComPelo.jpg'
import animaisSemPelo from '../assets/images/animaisSemPelo.jpg'
import Footer from "../components/Footer";
import '../style/Informacoes.css'

function Informaçoes() {
  return (
    <div className="informaçoes">
      <Navbar />
      <h1 className="titulo-central">Informaçoes</h1>
        <h2 className="titulo-central">Como selecionar a melhor foto:</h2>
        <p className="texto-informacoes paragrafo-preto">A foto é o principal elemento da produção de uma boa ilustração pois é baseado nela que eu verei todos os detalhes que preciso para fazer a arte.Por isso, uma foto em boa resolução é essencial para que o desenho fique legal.
        Evite fotos com baixa resolução, que não de para ver os detalhes do rosto da pessoa.</p>
        
        <h2 className="titulo-central">O que você recebe?</h2>  
        <p className="texto-informacoes paragrafo-preto">Ilustração digital em alta definição, enviada por e-mail, podendo ser impressa em qualquer medida sem perder qualidade. Formatos: .jpg, .png e .pdf.</p>
        
        <h2 className="texto-informacoes titulo-central">Valores: <img className="img-informaçoes" src={precoPorPessoa} alt="preços por pessoas" /></h2>

        <h2 className="texto-informacoes titulo-central">Animais com pelos <img className="img-animais-com-pelo" src={ animaisComPelos } alt="animais com" /></h2>
        <br />
        <h2 className="texto-informacoes titulo-central">Animais sem pelagem <img className="img-animais-sem-pelo" src={ animaisSemPelo } alt="animais sem pelo" /></h2>

        <h2 className="texto-informacoes titulo-central">Prazo de produção: <p className="paragrafo-preto">Até 10 dias úteis.</p> </h2>

        <h2 className="titulo-central titulo-central">Formas de pagamento:</h2>
        <p className="texto-informacoes paragrafo-preto">O pagamento deve ser feito por pix. Aceito 30% do valor total da arte para iniciar o desenho e o restante quando eu enviar a arte para sua aprovação.</p>
        <Footer />
    </div>
  )
}

export default Informaçoes;
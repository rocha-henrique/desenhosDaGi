import Navbar from "../components/Navbar";
import gianne from '../assets/images/gianne.jpg'
import '../style/Sobremim.css'

function SobreMim() {
  return (
    <div>
      <Navbar />
      <h1 className="titulo-sobreMim">Sobre mim</h1>
      <div className="container-sobreMim">
        <img className="img-gianne" src={ gianne } alt="" />
        <p className="texto-pessoal paragrafo-preto">
        Eu sou a Gianne. Sou de São Paulo, Brasil. Tudo começou em 2018, quando descobri o mundo da arte digital, um estilo onde minha arte poderia alcançar mais pessoas com mais facilidade.
        Em 2021 fiz meu primeiro desenho unindo quatro pessoas da mesma família que viveram em épocas diferentes e infelizmente nunca tive um registro juntos, fiz essa arte com muito carinho e desde então muitas pessoas me procuram com o intuito de apresentar alguém com uma arte única ilustrando um momento que nunca poderia ter existido. Sou apaixonado por fazer da minha arte um instrumento que toca o coração das pessoas.
        </p>
      </div>
    </div>
  )
}

export default SobreMim;
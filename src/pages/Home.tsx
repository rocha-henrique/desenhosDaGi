import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TodasAsFotos from "../components/TodasAsFotos";
import '../style/TodasAsFotos.css'


function Home() {
  return (
    <div>
      <Navbar />
      <div className="main">
      <header className="title" >
        <h1 className="sub-titulo">Bem vindo ao meu portifólio</h1>
      </header>
        <TodasAsFotos />
      </div>
      <Footer />
    </div>
  )
}

export default Home;
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Informaçoes from './pages/Informaçoes';
import SobreMim from './pages/SobreMim';
import FotoAmpliada from './pages/FotoAmpliada';

function App() {
  return (
    <Routes>
      <Route path="/desenhosdagi" element={ <Home /> } />
      <Route path="/informaçoes" element={ <Informaçoes /> } />
      <Route path="/sobremim" element={ <SobreMim /> } />
      <Route path="/foto/:id" element={ <FotoAmpliada /> } />
    </Routes>
  )
}

export default App;

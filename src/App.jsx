import TopNavBar from './Routes/TopNavBar';
import Bajada from './components/Bajada';
import ViewHome from './view/Home';
import ViewOpcionA from './view/OpcionA';
import ViewOpcionB from './view/OpcionB';
import ViewNotFound from './view/NotFound';
import ViewFavs from './view/Favs';
import ViewFiltros from './view/Filtros';
import ViewBusqueda from './view/Busqueda';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FavProvider } from './context/FavsContext';


function App() {
  return (
    <FavProvider>
      <Container fluid>
        <BrowserRouter> 
          <TopNavBar/>
          <Routes>
            <Route>
              <Route index element={<ViewHome/>}/>
              <Route path='/BebidasA' element={<ViewOpcionA />} />
              <Route path='/BebidasB' element={<ViewOpcionB />} />
              <Route path='/Favoritos' element={<ViewFavs />} />
              <Route path='/Filtros' element={<ViewFiltros />} />
              <Route path='/Busqueda' element={<ViewBusqueda />} />
              <Route path="*" element={<ViewNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Bajada />
      </Container>
    </FavProvider>
  )
}




export default App

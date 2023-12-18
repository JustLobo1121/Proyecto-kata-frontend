import Bajada from './components/Bajada';
import TopNavBar from './Routes/TopNavBar';
import { Container } from 'react-bootstrap';
import { FavProvider } from './context/FavsContext';
import { BrowserRouter } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Rutas from './Routes/Rutas';


function App() {
  return (
    <Container fluid>
        <FavProvider>
            <BrowserRouter> 
              <TopNavBar/>
              <Rutas />
            </BrowserRouter>
            <Bajada />
        </FavProvider>
    </Container>
  )
}




export default App

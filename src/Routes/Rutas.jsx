import ViewHome from '../view/Home';
import ViewOpcionA from '../view/OpcionA';
import ViewOpcionB from '../view/OpcionB';
import ViewNotFound from '../view/NotFound';
import ViewFavs from '../view/Favs';
import ViewFiltros from '../view/Filtros';
import ViewBusqueda from '../view/Busqueda';
import { Routes, Route } from "react-router-dom";

function Rutas() {
    return(
        <Routes>
        <Route>
          <Route index element={<ViewHome />} />
          <Route path='/BebidasA' element={<ViewOpcionA />} />
          <Route path='/BebidasB' element={<ViewOpcionB />} />
          <Route path='/Filtros' element={<ViewFiltros />} />
          <Route path='/Busqueda' element={<ViewBusqueda />} />
          <Route path='/Favoritos' element={<ViewFavs />} />
          <Route path="*" element={<ViewNotFound />} />
        </Route>
      </Routes>
    )
}

export default Rutas
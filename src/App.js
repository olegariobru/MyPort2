import Inicio from "./paginas/Inicio/Index";
import SobreMim from "./paginas/SobreMim/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Componentes/Menu";
import Footer from "Componentes/Footer";
import PaginaPadrao from "Componentes/PaginaPadrão";

function App() {

  return (
    <BrowserRouter> 
      <Menu/>

      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>}/>
        </Route>
        
        <Route path="SobreMim" element={<SobreMim/>}/>
        <Route path="*" element={<div>Página não encontrada</div>}/>  
      </Routes>
      
      <Footer/>
    </BrowserRouter>

    );
}

export default App;

import { useEffect } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Banner from './Componentes/Banner';
import Footer from './Componentes/Footer';
import Inicio from './paginas/Inicio/Index';
import Projetos from './paginas/Projetos';
import SobreMim from './paginas/SobreMim/Index';
import './App.css';

const pageTitles = {
  '/': 'Bruno Olegário | Portfólio de tecnologia',
  '/projetos': 'Projetos | Bruno Olegário',
  '/sobre-mim': 'Sobre mim | Bruno Olegário',
};
function PageTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = pageTitles[pathname] || 'Página não encontrada | Bruno Olegário';
  }, [pathname]);
  return null;
}
function NotFound() {
  return <section className="notFound pageContainer">
    <p className="eyebrow">404 · página não encontrada</p>
    <h1>Este caminho não existe.</h1>
    <Link className="button buttonPrimary" to="/">Voltar ao início</Link>
  </section>;
}
export default function App() {
  return <>
    <PageTitle />
    <a className="skipLink" href="#main-content">Pular para o conteúdo</a>
    <header className="siteHeader">
      <div className="headerInner">
        <Link className="brand" to="/" aria-label="Bruno Olegário, página inicial">BO<span>.</span></Link>
        <nav className="navigation" aria-label="Navegação principal">
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/projetos">Projetos</NavLink>
          <NavLink to="/sobre-mim">Sobre mim</NavLink>
        </nav>
      </div>
    </header>
    <main id="main-content">
      <Routes>
        <Route path="/" element={<><Banner /><Inicio /></>} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/sobre-mim" element={<SobreMim />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/SobreMim" element={<SobreMim />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </>;
}

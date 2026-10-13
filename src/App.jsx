import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Banner from './Componentes/Banner';
import Footer from './Componentes/Footer';
import Projetos from './paginas/Projetos';
import SobreMim from './paginas/SobreMim/Index';
import './App.css';

const pageTitles = {
  '/': '<bruno.dev>',
  '/projetos': '<bruno.dev>',
  '/sobre-mim': '<bruno.dev>',
};
function PageTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = pageTitles[pathname] || '<bruno.dev>';
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
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    const breakpoint = window.matchMedia('(max-width: 640px)');
    const closeOnDesktop = () => { if (!breakpoint.matches) setMenuOpen(false); };
    breakpoint.addEventListener('change', closeOnDesktop);
    return () => breakpoint.removeEventListener('change', closeOnDesktop);
  }, []);
  function handleHeaderKeyDown(event) {
    if (event.key === 'Escape' && menuOpen) {
      setMenuOpen(false);
      menuButton.current?.focus();
    }
  }
  return <div className="appShell">
    <PageTitle />
    <a className="skipLink" href="#main-content">Pular para o conteúdo</a>
    <header className={`siteHeader${menuOpen ? ' menuOpen' : ''}`} onKeyDown={handleHeaderKeyDown}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false);
      }}>
      <div className="headerInner">
        <Link className="brand" to="/" aria-label="Bruno Olegário, página inicial">
          <span className="brandDesktop">{'<bruno.dev>'}</span>
          <span className="brandMobile">#BO.DEV</span>
        </Link>
        <button className="menuToggle" type="button" ref={menuButton}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen} aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}>
          <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
        </button>
        <nav id="primary-navigation" className="navigation" aria-label="Navegação principal"
          onClick={() => setMenuOpen(false)}>
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/projetos">Projetos</NavLink>
          <NavLink to="/sobre-mim">Sobre mim</NavLink>
        </nav>
      </div>
    </header>
    <main id="main-content">
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/sobre-mim" element={<SobreMim />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/SobreMim" element={<SobreMim />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer showContact={['/sobre-mim', '/SobreMim'].includes(pathname)} />
  </div>;
}

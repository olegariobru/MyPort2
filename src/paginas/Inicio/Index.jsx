import { Link } from 'react-router-dom';
import ProjectCards from '../../Componentes/ProjectCards';
import './inicio.css';

export default function Inicio() {
  return <>
    <section className="homeProjects pageContainer" aria-labelledby="home-projects-title">
      <div className="sectionHeader">
        <div>
          <p className="eyebrow">Seleção em destaque</p>
          <h2 className="sectionHeading" id="home-projects-title">Projetos que resolvem problemas.</h2>
        </div>
        <p className="sectionIntro">Uma seleção de soluções web e ferramentas que desenvolvi com foco em utilidade, clareza e cuidado com a experiência.</p>
      </div>
      <ProjectCards featured />
      <div className="sectionCta">
        <Link className="button buttonSecondary" to="/projetos">Ver todos os projetos <span aria-hidden="true">→</span></Link>
      </div>
    </section>
    <section className="contactBand" aria-labelledby="contact-title">
      <div className="pageContainer contactInner">
        <div>
          <p className="eyebrow">Vamos conversar?</p>
          <h2 id="contact-title">Tem um desafio em mente?</h2>
        </div>
        <a className="button buttonPrimary" href="mailto:b_olgr@icloud.com">Entre em contato <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  </>;
}

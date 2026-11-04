import ProjectCards from '../../Componentes/ProjectCards';
import './projetos.css';

export default function Projetos() {
  return <section className="projectsPage pageContainer" aria-labelledby="projects-title">
    <header className="projectsIntro">
      <p className="projectsIndex">01 — Trabalho selecionado</p>
      <h1 className="sectionHeading" id="projects-title">Projetos que avançam com o problema.</h1>
      <p>Uma linha do tempo de produtos construídos para organizar informação, reduzir atrito e tornar tarefas mais simples.</p>
    </header>
    <ProjectCards />
  </section>;
}

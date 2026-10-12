import ProjectCards from '../../Componentes/ProjectCards';
import './projetos.css';

export default function Projetos() {
  return <section className="projectsPage pageContainer" aria-labelledby="projects-title">
    <h1 className="sectionHeading" id="projects-title">Projetos</h1>
    <ProjectCards />
  </section>;
}

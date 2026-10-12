import ProjectCards from '../../Componentes/ProjectCards';
import './projetos.css';

export default function Projetos() {
  return <section className="projectsPage pageContainer" aria-labelledby="projects-title">
    <p className="eyebrow">Trabalho selecionado</p>
    <h1 className="sectionHeading" id="projects-title">Projetos</h1>
    <p className="sectionIntro projectsIntro">Aplicações e ferramentas que mostram diferentes formas de usar tecnologia para resolver necessidades concretas. Cada card leva à demonstração, às capturas ou às instruções disponíveis.</p>
    <ProjectCards />
  </section>;
}

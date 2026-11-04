import { useLanguage } from '../../language';
import ProjectCards from '../../Componentes/ProjectCards';
import './projetos.css';

export default function Projetos() {
  const { t } = useLanguage();
  return <section className="projectsPage pageContainer" aria-labelledby="projects-title">
    <header className="projectsIntro">
      <p className="projectsIndex">{t("01 — Trabalho selecionado")}</p>
      <h1 className="sectionHeading" id="projects-title">{t("Projetos que avançam com o problema.")}</h1>
      <p>{t("Uma linha do tempo de produtos construídos para organizar informação, reduzir atrito e tornar tarefas mais simples.")}</p>
    </header>
    <ProjectCards />
  </section>;
}

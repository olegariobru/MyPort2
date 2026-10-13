import arkImage from '../../Images/projetos/arkitetura.png';
import accessImage from '../../Images/projetos/AccessManeg.png';
import { projects } from '../../data/projects';
import styles from './projectCard.module.css';

const covers = { access: accessImage, architecture: arkImage };
export default function ProjectCards({ featured = false }) {
  const visibleProjects = featured ? projects.slice(0, 2) : projects;
  return <div className={styles.projectGrid}>
    {visibleProjects.map((project, index) => <article className={styles.projectCard} key={project.slug}>
      <div className={`${styles.projectVisual} ${styles[`projectVisual-${project.cover}`] || ''}`}>
        {covers[project.cover]
          ? <img src={covers[project.cover]} alt="" loading={index > 1 ? 'lazy' : 'eager'} />
          : <span className={styles.projectMonogram} aria-hidden="true">{project.monogram}</span>}
        <span className={styles.projectNumber}>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className={styles.projectContent}>
        <p className={styles.projectType}>{project.type}</p>
        <h3>{project.name}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.projectActions}>
          <a className={styles.projectLink} href={project.showcaseUrl} target="_blank" rel="noreferrer">
            {project.showcaseLabel}
          </a>
          <a className={`${styles.projectLink} ${styles.projectGithub}`} href={project.repositoryUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </article>)}
  </div>;
}

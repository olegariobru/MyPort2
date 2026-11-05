import { useLanguage } from '../../language';
import { useEffect, useRef } from 'react';
import arkImage from '../../Images/projetos/arkitetura.png';
import { projects } from '../../data/projects';
import styles from './projectCard.module.css';

const covers = { architecture: arkImage };

export default function ProjectCards({ featured = false }) {
  const { t } = useLanguage();
  const timelineRef = useRef(null);
  const visibleProjects = featured ? projects.slice(0, 2) : projects;

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return undefined;
    const items = [...timeline.querySelectorAll('[data-timeline-item]')];
    timeline.classList.add(styles.motionReady);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((item) => item.classList.add(styles.visible));
      timeline.style.setProperty('--timeline-progress', '1');
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .22 });
    items.forEach((item) => observer.observe(item));
    const updateProgress = () => {
      const rect = timeline.getBoundingClientRect();
      const viewport = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (viewport * .62 - rect.top) / Math.max(rect.height, 1)));
      timeline.style.setProperty('--timeline-progress', progress.toFixed(3));
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      observer.disconnect();
      timeline.classList.remove(styles.motionReady);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [visibleProjects.length]);

  return <div className={styles.timeline} ref={timelineRef}>
    <div className={styles.timelineRail} aria-hidden="true"><span /></div>
    {visibleProjects.map((project, index) => <article className={styles.timelineItem} data-timeline-item key={project.slug}>
      <div className={styles.timelineMarker} aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
      <div className={styles.projectVisual}>
        {(project.image || covers[project.cover])
          ? <img src={(project.image || covers[project.cover])} alt={`Tela do projeto ${project.name}`} loading={index > 1 ? 'lazy' : 'eager'} />
          : <span className={styles.projectMonogram} aria-hidden="true">{project.monogram}</span>}
      </div>
      <div className={styles.projectContent}>
        <p className={styles.projectType}>{t(project.type)}</p>
        <h2>{project.name}</h2>
        <p className={styles.projectDescription}>{t(project.description)}</p>
        <div className={styles.projectActions}>
          <a className={styles.projectLink} href={project.showcaseUrl} target="_blank" rel="noreferrer">{t(project.showcaseLabel)}</a>
          {project.repositoryUrl && <a className={styles.projectLink} href={project.repositoryUrl} target="_blank" rel="noreferrer">{t("Ver GitHub")}</a>}
        </div>
      </div>
    </article>)}
  </div>;
}

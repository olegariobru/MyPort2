import { useLanguage } from '../../language';
import { Link } from 'react-router-dom';
import AboutMe from '../../Componentes/AboutMe';
import BannerSecundario from '../../Componentes/BannerSecundario';
import './sobremim.css';

const groups = [
  { title: 'Desenvolvimento', items: ['JavaScript', 'React', 'Node.js'] },
  { title: 'Dados e serviços', items: ['PostgreSQL', 'Firebase'] },
  { title: 'Experiência em TI', items: ['Suporte técnico', 'Infraestrutura', 'Governança de TI'] },
];
export default function SobreMim() {
  const { t } = useLanguage();
  return <div className="aboutPage pageContainer">
    <section className="aboutIntro" aria-label={t("Apresentação")}>
      <BannerSecundario />
      <AboutMe />
    </section>
    <section className="skillsSection" aria-labelledby="skills-title">
      <p className="eyebrow">{t("Ferramentas e experiência")}</p>
      <h2 className="sectionHeading" id="skills-title">{t("Tecnologias e áreas de atuação")}</h2>
      <div className="skillsGrid">{groups.map((group) => <article className="skillGroup" key={t(group.title)}>
        <h3>{t(group.title)}</h3>
        <ul>{group.items.map((item) => <li key={t(item)}>{t(item)}</li>)}</ul>
      </article>)}</div>
    </section>
    <section className="aboutCta">
      <p>{t("Do código ao uso cotidiano.")}</p>
      <Link className="button buttonPrimary" to="/projetos">{t("Explorar projetos")}</Link>
    </section>
  </div>;
}

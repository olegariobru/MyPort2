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
  return <div className="aboutPage pageContainer">
    <section className="aboutIntro" aria-label="Apresentação">
      <BannerSecundario />
      <AboutMe />
    </section>
    <section className="skillsSection" aria-labelledby="skills-title">
      <p className="eyebrow">Ferramentas e experiência</p>
      <h2 className="sectionHeading" id="skills-title">Tecnologias e áreas de atuação</h2>
      <div className="skillsGrid">{groups.map((group) => <article className="skillGroup" key={group.title}>
        <h3>{group.title}</h3>
        <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
      </article>)}</div>
    </section>
    <section className="aboutCta">
      <p>Quer conhecer o que venho construindo?</p>
      <Link className="button buttonPrimary" to="/projetos">Explorar projetos</Link>
    </section>
  </div>;
}

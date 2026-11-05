import { useLanguage } from '../../language';
import { Link } from 'react-router-dom';
import AboutMe from '../../Componentes/AboutMe';
import BannerSecundario from '../../Componentes/BannerSecundario';
import './sobremim.css';

const groups = [
  {
    "title": "Suporte e infraestrutura",
    "note": "Experiência prática",
    "items": [
      "Montagem e manutenção de PCs corporativos e gamers",
      "Instalação e manutenção de redes",
      "Servidores",
      "Instalação de câmeras CFTV",
      "Manutenção de sistemas de ponto"
    ]
  },
  {
    "title": "Administração de TI",
    "note": "Experiência prática",
    "items": [
      "Active Directory",
      "Políticas de grupo (GPO)",
      "Administração de antivírus Kaspersky",
      "KeePass"
    ]
  },
  {
    "title": "Desenvolvimento web",
    "note": "Tecnologias com que tenho contato",
    "items": [
      "HTML",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Express",
      "WordPress",
      "APIs REST"
    ]
  },
  {
    "title": "Dados e análise",
    "note": "Ferramentas e atividades",
    "items": [
      "SQL",
      "PostgreSQL",
      "MySQL",
      "Microsoft Access",
      "Excel",
      "Análise de dados em BI"
    ]
  },
  {
    "title": "Programação e ferramentas",
    "note": "Tecnologias com que tenho contato",
    "items": [
      "Python",
      "GitHub",
      "Vercel",
      "Ferramentas de IA",
      "Vite com apoio de IA"
    ]
  },
  {
    "title": "Design e edição de imagens",
    "note": "Ferramentas e atividades",
    "items": [
      "Criação de peças gráficas",
      "Adobe Photoshop",
      "GIMP"
    ]
  }
];
export default function SobreMim() {
  const { t } = useLanguage();
  return <div className="aboutPage pageContainer">
    <section className="aboutIntro" aria-label={t("Apresentação")}>
      <BannerSecundario />
      <AboutMe />
    </section>
    <section className="skillsSection" aria-labelledby="skills-title">
      <p className="eyebrow">{t("Da infraestrutura ao desenvolvimento")}</p>
      <h2 className="sectionHeading" id="skills-title">{t("Tecnologias e experiência")}</h2>
      <p className="skillsSummary">{t("Experiência prática em suporte e infraestrutura, ampliada pelo contato com desenvolvimento, dados e criação visual.")}</p>
      <div className="skillsGrid">{groups.map((group) => <article className="skillGroup" key={t(group.title)}>
        <div className="skillHeading"><h3>{t(group.title)}</h3><p>{t(group.note)}</p></div>
        <ul>{group.items.map((item) => <li key={t(item)}>{t(item)}</li>)}</ul>
      </article>)}</div>
    </section>
    <section className="aboutCta">
      <p>{t("Do código ao uso cotidiano.")}</p>
      <Link className="button buttonPrimary" to="/projetos">{t("Explorar projetos")}</Link>
    </section>
  </div>;
}

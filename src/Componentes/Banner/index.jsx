import { Link } from 'react-router-dom';
import circuloColorido from '../../Images/assets/anel.png';
import minhaFoto from '../../Images/assets/eu2.png';

export default function Banner() {
  return <section className="hero pageContainer" aria-labelledby="hero-title">
    <div className="heroCopy">
      <h1 id="hero-title">Olá, eu sou o <span>Bruno Olegário</span>.</h1>
      <p className="heroLead">Transformo desafios de TI em soluções digitais claras, úteis e confiáveis.</p>
      <div className="heroActions">
        <Link className="button buttonPrimary" to="/projetos">Conheça meus projetos <span aria-hidden="true">↗</span></Link>
        <Link className="button buttonSecondary" to="/sobre-mim">Sobre mim</Link>
      </div>
    </div>
    <div className="heroPortrait">
      <img className="portraitRing" src={circuloColorido} alt="" aria-hidden="true" />
      <img className="portraitPhoto" src={minhaFoto} alt="Bruno Olegário" fetchPriority="high" />
    </div>
  </section>;
}
